let users = [	
    {	

      first_name: 'FirstTest1',	
      last_name: 'LastTest1',	
      email: 'test1@test.com',	
      ip_address: '12.3.45.678',	
      latitude: 51.6553959,	
      longitude: 0.0572553	
    },	
    {	

      first_name: 'FirstTest2',	
      last_name: 'LastTest2',	
      email: 'test2@test.com',	
      ip_address: '12.3.45.678',	
      latitude: 49.6710832,	
      longitude: 0.8078532	
    },	
    {	

      first_name: 'FirstTest3',	
      last_name: 'LastTest3',	
      email: 'test3@test.com',	
      ip_address: '100.89.186.13',	
      latitude: 51.5489435,	
      longitude: -2.3860497	
    }	
  ];

  //trying out mocks -unfinished
  export default function request(url) {
    return new Promise((resolve, reject) => {
      process.nextTick(() =>
        users[email]
          ? resolve(users[email])
          : reject({
              error: 'User not found.',
            }),
      );
    });
  }