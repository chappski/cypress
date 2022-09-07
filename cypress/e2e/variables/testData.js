

export const testData = {
  "Processes":
  [   
    {
      'Processes': {
        'Tables Production 1': {
          'name': 'Tables Production 1',
        },
        'Tables Production 2': {
          'name': 'Tables Production 2',
        },
    }
  }
  ],
  "Operations":
    [
      {
        'Operations': {
          'Assembling': {
            'name': 'Assembling',
            'duration': '500',
            'workers': 'Assembling: Mark Deep',
          },
          'Cutting pipes': {
            'name': 'Cutting pipes',
            'duration': '50',
            'machines': 'Cutter 1',
            'workers': 'Machine operator: John Smith',
          },
          'Drilling holes in plates': {
            'name': 'Drilling holes in plates',
            'duration': '100',
            'machines': 'Cutter 2',
            'workers': 'Machine operator: John Smith',
          },
          'Bringing pipes': {
            'name': 'Bringing pipes',
            'duration': '10',
            'workers': 'Helper: Frank Lee',
          },
          'Bringing plates': {
            'name': 'Bringing plates',
            'duration': '30',
            'workers': 'Helper: Frank Lee',
          },
        }
      }
    ],
  'Entities':
    [
      {
        'Costs': {
          'Electricity': {
            'Type': 'Electricity Price',
            'currency': 'Euro',
            'amount': "2",
          },
          'Salary 1': {
            'Type': 'Basic',
            'currency': 'Euro',
            'amount': "10",
          },
          'Salary 2': {
            'Type': 'Medium',
            'currency': 'Euro',
            'amount': "15",
          },
          'Salary 3': {
            'Type': 'High',
            'currency': 'Euro',
            'amount': "20",
          },
        }
      },
      {
        'Workers': {
          'worker 1': {
            'profession': 'Machine operator',
            'firstname': 'John',
            'secondname': 'Smith',
            'payment': 'High-20.0 EUR'
          },
          'worker 2': {
            'profession': 'Assembling',
            'firstname': 'Mark',
            'secondname': 'Deep',
            'payment': 'Medium-15.0 EUR'
          },
          'worker 3': {
            'profession': 'Helper',
            'firstname': 'Frank',
            'secondname': 'Lee',
            'payment': 'Basic-10.0 EUR'
          }
        }
      },
      {
        'Utilities': {
          'Utility Electricity': {
            'uname': 'Electricity',
            'cost': 'Electricity Price-2.0 EUR',
          }
        }
      },
      {
        'Machines': {
          'Cutter 1': {
            'name': 'Cutter 1',
            'usage': 'Electricity',
            'usagePerH': '10',
          },
          'Cutter 2': {
            'name': 'Cutter 2',
            'usage': 'Electricity',
            'usagePerH': '10',
          }
        }
      },
    ]
}