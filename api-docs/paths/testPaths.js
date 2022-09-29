module.exports = {
    '/test/': {
        get: {
            tags: ["Testing API V2"],
            summary: "Test API V2",
            description: "Test API V2",
            responses:{
              content: {
                'application/json': {
                  example:{
                      status: 200,
                      message: 'Successfully get all Data',
                      list : [
                          {
                              id: 'abcd-efgh',
                              username: 'Abc123',
                              email: 'Abc@mail.com',
                              createdAt: '',
                              createdBy: '',
                          }
                      ],
                  },
        }
    }
}
        }
    }
}
