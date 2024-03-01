const schemaGetPosts = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "schemaJsonPlaceHolderCy",
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "userId": {
                "type": "integer"
            },
            "id": {
                "type": "integer"
            },
            "title": {
                "type": "string"
            },
            "body": {
                "type": "string"
            }
        },
        "required": ["userId", "id", "title", "body"]
    }
};

module.exports = schemaGetPosts;