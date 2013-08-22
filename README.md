shouldIncludeFragment
=========
Jasmine matcher designed to allow you to test whether a particular JSON object matches a fragment, only comparing the keys that the fragment has.
Example
---------
    expect({foo: "bar", unrelated_field: 42}).toIncludeFragment({foo: "bar"}) //passes
