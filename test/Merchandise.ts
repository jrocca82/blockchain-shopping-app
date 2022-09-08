import { ethers, deployments, network } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Merchandise } from "../typechain-types";
import { expect } from "./chai-setup";

describe("Merchandise", () => {
	let deployer: SignerWithAddress, alice: SignerWithAddress;
	let token: Merchandise;

	beforeEach(async () => {
		[deployer, alice] = await ethers.getSigners();
		await deployments.fixture(["Merchandise"]);
		token = await ethers.getContract("Merchandise");
	});

	it("Should run", async () => {});
});
