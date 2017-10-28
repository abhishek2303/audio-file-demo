

## nlp-parsing-service Abhishek Chatterjee

## REST Endpoint Documentation

### POST

#### 172.23.238.159:9512/v1/virtualassistance/send-to-searchservice

```json
{
    "request": 
    {
        "id": 1,
        "text": "This is a converted text"
    },
    "response": 
    {
        "id": 1,
        "text": "This is a converted text",
        "keywords": [
            "This",
            "is",
            "a",
            "converted",
            "text"
        ]
    }
}
```

### Micro Service Kafka Documentation

#### Publishing Data Into Kafka
```json
{
    "id": 1,
    "text": "This is a converted text",
    "keywords": [
        "This",
        "is",
        "a",
        "converted",
        "text"
    ]
}
```

#### Consuming Data Into Kafka

```json{
    "id": 1,
    "text": "This is a converted text"
}
```

