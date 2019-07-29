export default {
  data: [
    { id: 1, name: 'Custom Account', description: 'Custom' },
    { id: 2, name: 'Joint Account', description: 'Joint' },
    { id: 3, name: 'Fixed Account', description: 'Fixed' },
    { id: 4, name: 'Limbo Account', description: 'Limbo' },
    { id: 5, name: 'Current Account', description: 'Current' }
  ],
  accountMembers: [
    { id: 1, name: 'Hussein' },
    { id: 2, name: 'Timo' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Andrea' },
    { id: 5, name: 'Miriam' },
    { id: 6, name: 'Jane' },
    { id: 7, name: 'Carrey' }
  ],
  adminRulesData: [
    { id: 1, name: 'add a member', number: 1 },
    { id: 2, name: 'make a member an admin', number: 0 },
    { id: 3, name: 'make a withdrawal', number: 2 },
    { id: 4, name: 'make payment', number: 2 },
    { id: 5, name: 'change rules', number: 2 },
    { id: 6, name: 'remove an admin', number: 3 }
  ],
  customAccountData: [
    { id: 1, name: 'withdrawal per month', number: 0 },
    { id: 2, name: 'payments per month', number: 2 },
    { id: 3, name: 'deposits per month', number: 1 }
  ]
};
