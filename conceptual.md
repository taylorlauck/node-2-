### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
- JWT stands for JSON Web Token. It generates a token that is used to authenticate users. It is a string that is made up of three parts: header, payload, and signature.

- What is the signature portion of the JWT?  What does it do?
- The signature is the third part of the JWT. It is used to verify that the token has not been tampered with and to verify that the sender of the JWT is from the correct source.

- If a JWT is intercepted, can the attacker see what's inside the payload?
- No, it is encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
- You can implement authentication with a JWT by using a secret key. The secret key is used to encrypt the JWT. The JWT is then sent to the client. The client then sends the JWT back to the server. The server then decrypts the JWT using the secret key. If the JWT is valid, the server will then send the requested data to the client.

- Compare and contrast unit, integration and end-to-end tests.
- Unit tests test individual units of code. Integration tests test how different units of code work together. End-to-end tests test the entire application.

- What is a mock? What are some things you would mock?
- A mock is a fake object that is used to test code. You would mock things that are not easily testable such as a database or requests to an API.

- What is continuous integration?
- Continuous integration is the practice of merging code into a shared repository frequently. It is used to prevent merge conflicts.

- What is an environment variable and what are they used for?
- An environment variable is a variable that is set outside of the application. It is used to store sensitive information such as API keys.

- What is TDD? What are some benefits and drawbacks?
- TDD stands for test driven development. It is the practice of writing tests before writing code. Some benefits of TDD are that it helps you write better code and it helps you write code faster. Some drawbacks are that it can be increase the time it takes to write code.

- What is the value of using JSONSchema for validation?
- JSONSchema is used to validate JSON data. It is used to ensure that the data is in the correct format. It can also help show errors much earlier in the development process.


- What are some ways to decide which code to test?
- You can decide which code to test by testing code that is critical to the application. You can also test code that is not easily testable.

- What does `RETURNING` do in SQL? When would you use it?
- RETURNING is used to return data after an insert, update, or delete query. You would use it when you want to return data after an insert, update, or delete query.

- What are some differences between Web Sockets and HTTP?
- Web Sockets are used to create a persistent connection between the client and the server. HTTP is used to make a request to the server and then the connection is closed.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  - It's hard for me to decide. I liked how easy Flask was to use with SQLalchemy, however, I enjoy javascript overall as a whole. Express feels a bit harder to learn, but it also feels like it has more freedom for developing. I'm split right now.
