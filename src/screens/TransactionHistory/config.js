export default {
  buttonsData: [
    { id: 1, status: 'All' },
    { id: 2, status: 'Completed' },
    { id: 3, status: 'Cancelled' },
    { id: 4, status: 'Pending' }
  ],
  transactionsData: [
    {
      id: 11,
      name: 'Brenda TP pay..',
      time: '5 Mins ago',
      status: 'pending',
      amount: '500,000',
      transactionDetails: {
        amount: 4500,
        position: 'Pending'
      },
      transaction: {
        id: 234435,
        status: true,
        transactionStatus: 'Pending',
        title: 'Kane Car repair charges',
        refId: 'Ref ID: 93774374',
        time: '19:00 . 23 Mar',
        transactionDate: '23 Mar',
        dueDate: 'Due Date: 23rd Jun 2019',
        from: 'Tusasanya Spending',
        to: 'Kane Wanyana',
        description: 'Car repairs'
      }
    },
    {
      id: 16,
      name: 'Brenda TP pay..',
      time: '5 Mins ago',
      status: 'completed',
      amount: '500,000',
      transactionDetails: {
        amount: 4500,
        position: 'Pending'
      },
      transaction: {
        id: 234435,
        status: true,
        transactionStatus: 'Pending',
        title: 'Kane Car repair charges',
        refId: 'Ref ID: 93774374',
        time: '19:00 . 23 Mar',
        transactionDate: '23 Mar',
        dueDate: 'Due Date: 23rd Jun 2019',
        from: 'Tusasanya Spending',
        to: 'Kane Wanyana',
        description: 'Car repairs'
      }
    },
    {
      id: 17,
      name: 'Brenda TP pay..',
      time: '5 Mins ago',
      status: 'cancelled',
      amount: '500,000',
      transactionDetails: {
        amount: 4500,
        position: 'cancelled'
      },
      transaction: {
        id: 234435,
        status: true,
        transactionStatus: 'Pending',
        title: 'Kane Car repair charges',
        refId: 'Ref ID: 93774374',
        time: '19:00 . 23 Mar',
        transactionDate: '23 Mar',
        dueDate: 'Due Date: 23rd Jun 2019',
        from: 'Tusasanya Spending',
        to: 'Kane Wanyana',
        description: 'Car repairs'
      }
    },
    {
      id: 12,
      name: 'Kane Car repair...',
      time: '23 Mar',
      status: 'cancelled',
      amount: '7500',
      transactionDetails: {
        amount: 200,
        position: 'Pending'
      },
      transaction: {
        id: 120,
        status: true,
        transactionStatus: 'Completed',
        title: 'Kane Car repair charges',
        refId: 'Ref ID: 93774374',
        time: '19:00 . 23 Mar',
        transactionDate: '23 Mar',
        dueDate: 'Due Date: 23rd Jun 2019',
        from: 'Tusasanya Spending',
        to: 'Kane Wanyana',
        description: 'Car repairs'
      }
    }
  ],
  PendingData: [
    {
      id: 11,
      name: 'Brenda TP pay..',
      time: '5 Mins ago',
      status: 'Pending',
      amount: '500,000,000',
      transactionDetails: {
        amount: 4500,
        position: 'Pending'
      },
      transaction: {
        id: 234435,
        status: true,
        transactionStatus: 'Pending',
        title: 'Kane Car repair charges',
        refId: 'Ref ID: 93774374',
        time: '19:00 . 23 Mar',
        transactionDate: '23 Mar',
        dueDate: 'Due Date: 23rd Jun 2019',
        from: 'Tusasanya Spending',
        to: 'Kane Wanyana',
        description: 'Car repairs'
      }
    },
    {
      id: 2,
      name: 'Kane Car repair...',
      time: '23 Mar',
      status: 'Pending',
      amount: '1500',
      transactionDetails: {
        amount: 200,
        position: 'Pending'
      },
      transaction: {
        id: 120,
        status: true,
        transactionStatus: 'Completed',
        title: 'Kane Car repair charges',
        refId: 'Ref ID: 93774374',
        time: '19:00 . 23 Mar',
        transactionDate: '23 Mar',
        dueDate: 'Due Date: 23rd Jun 2019',
        from: 'Tusasanya Spending',
        to: 'Kane Wanyana',
        description: 'Car repairs'
      }
    }
  ],
  CancelledData: [
    {
      id: 11,
      name: 'Brenda TP pay..',
      time: '5 Mins ago',
      status: 'Cancelled',
      amount: '7,500',
      transactionDetails: {
        amount: 4500,
        position: 'Cancelled'
      },
      transaction: {
        id: 234435,
        status: true,
        transactionStatus: 'Pending',
        title: 'Kane Car repair charges',
        refId: 'Ref ID: 93774374',
        time: '19:00 . 23 Mar',
        transactionDate: '23 Mar',
        dueDate: 'Due Date: 23rd Jun 2019',
        from: 'Tusasanya Spending',
        to: 'Kane Wanyana',
        description: 'Car repairs'
      }
    },
    {
      id: 2,
      name: 'Kane Car repair...',
      time: '23 Mar',
      status: 'Cancelled',
      amount: '125,000',
      transactionDetails: {
        amount: 200,
        position: 'Cancelled'
      },
      transaction: {
        id: 120,
        status: true,
        transactionStatus: 'Completed',
        title: 'Kane Car repair charges',
        refId: 'Ref ID: 93774374',
        time: '19:00 . 23 Mar',
        transactionDate: '23 Mar',
        dueDate: 'Due Date: 23rd Jun 2019',
        from: 'Tusasanya Spending',
        to: 'Kane Wanyana',
        description: 'Car repairs'
      }
    }
  ],
  completedData: [
    {
      id: 14,
      name: 'Test Client is predominant',
      time: '5 Mins ago',
      status: 'completed',
      amount: '100,000',
      transactionDetails: {
        amount: 2500,
        position: 'Completed'
      },
      transaction: {
        id: 234435,
        status: true,
        transactionStatus: 'Pending',
        title: 'Kane Car repair charges',
        refId: 'Ref ID: 93774374',
        time: '19:00 . 23 Mar',
        transactionDate: '23 Mar',
        dueDate: 'Due Date: 23rd Jun 2019',
        from: 'Tusasanya Spending',
        to: 'Kane Wanyana',
        description: 'Car repairs'
      }
    },
    {
      id: 25,
      name: 'Fixer is to fix',
      time: '23 Mar',
      status: 'completed',
      amount: '45,000',
      transactionDetails: {
        amount: 1500,
        position: 'Completed'
      },
      transaction: {
        id: 120,
        status: true,
        transactionStatus: 'Completed',
        title: 'Kane Car repair charges',
        refId: 'Ref ID: 93774374',
        time: '19:00 . 23 Mar',
        transactionDate: '23 Mar',
        dueDate: 'Due Date: 23rd Jun 2019',
        from: 'Tusasanya Spending',
        to: 'Kane Wanyana',
        description: 'Car repairs'
      }
    },
    {
      id: 29,
      name: 'Endurance is the pride of africa',
      time: '23 Mar',
      status: 'Completed',
      amount: '85,000,000',
      transactionDetails: {
        amount: 500,
        position: 'Completed'
      },
      transaction: {
        id: 120,
        status: true,
        transactionStatus: 'Completed',
        title: 'Kane Car repair charges',
        refId: 'Ref ID: 93774374',
        time: '19:00 . 23 Mar',
        transactionDate: '23 Mar',
        dueDate: 'Due Date: 23rd Jun 2019',
        from: 'Tusasanya Spending',
        to: 'Kane Wanyana',
        description: 'Car repairs'
      }
    },
    {
      id: 27,
      name: 'Residential is the biggest faker of all time',
      time: '23 Mar',
      status: 'Completed',
      amount: '5,000',
      transactionDetails: {
        amount: 1700,
        position: 'Completed'
      },
      transaction: {
        id: 120,
        status: true,
        transactionStatus: 'Completed',
        title: 'Kane Car repair charges',
        refId: 'Ref ID: 93774374',
        time: '19:00 . 23 Mar',
        transactionDate: '23 Mar',
        dueDate: 'Due Date: 23rd Jun 2019',
        from: 'Tusasanya Spending',
        to: 'Kane Wanyana',
        description: 'Car repairs'
      }
    }
  ]
};
