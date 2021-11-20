# aws-metadata-instance

## What it does
- Query the metadata of an ec2 instance within AWS and provide a json formatted output. 

## How to install
- SSH into the EC2 linux instance
- Install Python 3 and git on your instance 
    - `sudo yum install python3 git`
- Clone this repository
  - `git clone https://github.com/stanvinder01/terraform-code-main`
- Install pipenv
  - `sudo pip3 install pipenv`
- Open the repository on your instance
  - `cd aws-metadata-json`
- Install project dependancies
  - `pipenv install`
  - `pip3 install requests`


## How to run
- Open the `metadata-instance` folder
  - `cd metadata-instance/`
- Run the script:
  - `python3 get_metadata.py`

## How it works
- It makes use of the http://IP-address/latest/meta-data link-local address. Instance metatada is provided at this link, but only when you visit it from a running instance.
