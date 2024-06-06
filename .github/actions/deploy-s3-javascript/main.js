/* eslint-disable no-undef */
const core = require('@actions/core');
const exec = require('@actions/exec');
// import github from '@actions/github';
function run() {
	// 1 - Get the inputs
	const bucket = core.getInput('bucket', { required: true });
	const bucketRegion = core.getInput('bucket-region', { required: false });
	const distFolder = core.getInput('dist-folder', { required: false });

	// 2- Upload My Files to S3

	exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`);
	core.notice('Hello from my Custom Action');
}

run();
