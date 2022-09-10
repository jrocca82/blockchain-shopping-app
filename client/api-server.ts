import { config } from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { expressjwt as jwt, GetVerificationKey } from "express-jwt"
import jwksRsa from "jwks-rsa";

config();

const app = express();
const port = process.env.API_PORT || 3001;
const baseUrl = process.env.AUTH0_BASE_URL;
const issuerBaseUrl = process.env.AUTH0_ISSUER_BASE_URL;
const audience = process.env.AUTH0_AUDIENCE;

if (!baseUrl || !issuerBaseUrl) {
  throw new Error('Please make sure that the file .env.local is in place and populated');
}

if (!audience) {
  console.log('AUTH0_AUDIENCE not set in .env.local. Shutting down API server.');
  process.exit(1);
}

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: baseUrl }));

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuerBaseUrl}/.well-known/jwks.json`
  }) as GetVerificationKey,
  audience: audience,
  issuer: `${issuerBaseUrl}/`,
  algorithms: ['RS256']
});

app.get('/api/shows', checkJwt, (req, res) => {
  res.send({
    msg: 'Your access token was successfully validated!'
  });
});

const server = app.listen(port, () => console.log(`API Server listening on port ${port}`));
process.on('SIGINT', () => server.close());