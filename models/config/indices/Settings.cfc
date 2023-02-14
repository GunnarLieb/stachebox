/**
* Elasticsearch mapping configuration for public search users
**/
component accessors="true"{

    property name="config";

    variables.config = {
		"settings" : {
			"number_of_shards" : 2,
			"number_of_replicas" : 1
		},
        "mappings": {
            "_doc": {
                "properties": {
					"id": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"key": {
						"type": "keyword"
					},
					"name": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"value": {
						"type": "text"
					}
                }
            }
        }
    };

}
