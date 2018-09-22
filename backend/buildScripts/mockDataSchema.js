var schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 10,
      "maxItems": 20,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": "name.findName"
          },
          "phone": {
            "type": "string",
            "faker": "phone.phoneNumber"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          },
          "title": {
            "type": "string",
            "chance": {
              "pickone": [
                [
                  "Frontend Developer",
                  "Backend Developer",
                  "Android Developer",
                  "iOS Developer"
                ]
              ]
            }
          },
          "description": {
            "type": "string",
            "chance": {
              "pickone": [
                [
                  "Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.",
                  "I build apps, games and Swift developer tools! Passionate about open source & developer productivity."
                ]
              ]
            }
          },
          "image": {
            "type": "string",
            "chance": {
              "pickone": [
                [
                  "https://miro.medium.com/fit/c/240/240/1*Vko_9kRNbjQGCqyBM9OnVw.jpeg",
                  "https://miro.medium.com/fit/c/240/240/1*9ZtET_L1852yXaDZJUo9CQ.png",
                  "https://cdn-images-1.medium.com/fit/c/200/200/1*xB4CuCviTqfarnzs7QQESw.jpeg",
                  "https://miro.medium.com/fit/c/240/240/1*JaJeGMPMh0KxUXtpisjjHg.jpeg"
                ]
              ]
            }
          }
        },
        "required": ["id", "name", "phone", "email", "title", "description", "image"]
      }
    }
  },
  "required": ["users"]
};

module.exports = schema;