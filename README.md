# Prepare your S3 Bucket in AWS Playground

## 1. Deploying S3 bucket and static site hosting

- Terraform cli installed via Homebrew https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli#install-terraform
- If you install deprecated one from homebrew, here are the steps to install latests one
- brew uninstall terraform
- brew tap hashicorp/tap
- brew install hashicorp/tap/terraform

- cd infrastructure

- Set AWS environment variables from AWS Playground Access Keys by running below commands

```sh
export AWS_ACCESS_KEY_ID="key1"
export AWS_SECRET_ACCESS_KEY="key2"
export AWS_SESSION_TOKEN="key3"
```

- open main.tf and replace your_name with your actual name
- copy paste aws playgroud access keys in terminal
- run `terraform init`
- run `terraform plan`
- run `terraform apply -auto-approve`
- will get strange 403 error of aws_s3_bucket_policy (probably playground account is setup with specific permission? 🤔)
- run `terraform apply -auto-approve` again
- go to AWS Playground - SRE 1 > Type 'S3' in searchbar > filter by gha-{your_name}
- confirm new S3 bucket with your name exists in AWS
- confirm that static site hosting is enabled, public access is turned on and bucket policy is attached

## 2. Destroy all the resources we deployed

- run `terraform destroy -auto-approve`

## 3. Add Secrets to your Forked Github Repository

- go to your forked repository > Settings > Security > Secrets and Variables > Actions
- add `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN` with the values from AWS Playground
- you can find those values by clicking Access Keys under the AWS Playground - SRE 1

## Recommended IDE Setup

- [Github Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions)
- [Terraform](https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Test

```sh
npm run test
```

### Lint

```sh
npm run lint
```
