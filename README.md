# auto-clone

> Clone repo and start the workflow.

## Config

`cat ~/.auto-clonerc`

```json
{
  "dir": "~/projects",
  "options": "--depth=1",
  "workflows": [
    {
      "test": "/github/",
      "after": [
        "git config user.name wmzy && git config user.email 1256573276@qq.com",
        "code .",
        "test -f package-lock.json && npm ci",
        "test -f yarn.lock && yarn install --frozen-lockfile"
      ]
    },
    {
      "test": "/gitlab/",
      "after": [
        "git config user.name [gitlab user name] && git config user.email [gitlab user email]",
        "code ."
      ]
    }
  ]
}

```

## TODO

- [ ] support js config
- [ ] merge config items
- [ ] after hooks error handler
