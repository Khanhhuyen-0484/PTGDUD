// Mock API functions
const mockCustomers = [
    { id: 1, name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'New' },
    { id: 2, name: 'Carlos Garcia', company: 'SmocosShift', value: '$747', date: '20/07/2023', status: 'New' },
    { id: 3, name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/09/2023', status: 'In-progress' },
    { id: 4, name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/09/2023', status: 'In-progress' },
    { id: 5, name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/05/2023', status: 'Completed' },
  ];
  
  let customers = [...mockCustomers];
  
  export const getCustomers = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...customers]), 500);
    });
  };
  
  export const addCustomer = (customer) => {
    return new Promise((resolve) => {
      const newCustomer = {
        ...customer,
        id: Math.max(...customers.map(c => c.id)) + 1,
        value: `$${customer.value}`
      };
      customers.push(newCustomer);
      setTimeout(() => resolve(newCustomer), 500);
    });
  };
  
  export const updateCustomer = (id, customerData) => {
    return new Promise((resolve) => {
      customers = customers.map(c => 
        c.id === id ? { ...c, ...customerData, value: `$${customerData.value}` } : c
      );
      setTimeout(() => resolve(), 500);
    });
  };
  
  export const deleteCustomer = (id) => {
    return new Promise((resolve) => {
      customers = customers.filter(c => c.id !== id);
      setTimeout(() => resolve(), 500);
    });
  };