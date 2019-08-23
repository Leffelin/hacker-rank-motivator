# Hacker rank information

I have tried to find out how to get information about exercises from hackerrank. This document describes the finding that I make.

## Getting exercises

The api to search for exercises seems to be able to be used, without login.  
The below request gets 100 challenges from the `algorithms` section.

```
https://www.hackerrank.com/rest/contests/master/tracks/algorithms/challenges?offset=0&limit=100
```

Searching for `data structures`:

```
https://www.hackerrank.com/rest/contests/master/tracks/data-structures/challenges?offset=0&limit=100
```

You get a list of models back, in which the `slug` can be used to construct the url to the problem.

```
{
    data: {
        models: [
            {
                ...
                slug: "append-and-delete"
                ...
            },
            ...
        ]
    }
}
```

For the problem above, the url becomes:

```
https://www.hackerrank.com/challenges/append-and-delete/problem
```

### Filters

It is possible to add different filters to the search.  
Try to do a search inside hackerrank and then have a look at the request that is being sent.  
E.g Getting only `easy` exercise from the algorithms section becomes:

```
https://www.hackerrank.com/rest/contests/master/tracks/algorithms/challenges?offset=0&limit=10&filters%5Bdifficulty%5D%5B%5D=easy
```
