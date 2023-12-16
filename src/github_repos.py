import requests
import credentials

from github import Github
from github import Auth

# with python module for accessing Github REST API

auth = Auth.Token(credentials.GITHUB_API_KEY)
g = Github(auth=auth)

def fetch_all_repositories():
    for repo in g.get_user().get_repos():
        print(repo)
        # print(repo.name)
        
# Using ChatGPT generated code
        
username = credentials.GITHUB_USERNAME
access_token = credentials.GITHUB_API_KEY

def fetch_public_repositories():
    url = f"https://api.github.com/users/{username}/repos"
    headers = {"Authorization": f"token {access_token}"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        repositories = response.json()
        return repositories
    else:
        raise Exception(f"Failed to fetch repositories. Status code: {response.status_code}\n{response.text}")
    
# Execution:

if __name__ == "__main__":
    try:
        repositories = fetch_public_repositories()        
        for repo in repositories:
            print(f"Repository Name: {repo['name']}, URL: {repo['html_url']}")
    except Exception as e:
        print(f"An error occurred: {e}")