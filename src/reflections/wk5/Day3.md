# Day 3 
## Node/Express > MongoDb Relationships and answer the following questions
In simple terms what is a sub-document?

A subdocument is an embedded document, or a document nested within an document.

When might you use a sub-document?
When adding data to an existing schema.

When you want to add properties to a created document.

How do you add to a collection of sub-documents? What about editing them?
You can add a colledction of sub documents by passing a nested object into a model, to edit them use findone to find the document, get the array, then change the array and update it.

afternoon challenge: https://github.com/corymccormick/spring21-gregslist-server.git