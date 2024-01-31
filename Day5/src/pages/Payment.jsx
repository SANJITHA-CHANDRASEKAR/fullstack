import React from 'react';
import { Table, Button } from 'rsuite';
import AdminNav from "../components/AdminNav";

const { Column, HeaderCell, Cell } = Table;

const samplePaymentData = [
  { userId: 1, courseName: 'React Fundamentals', amount: 500, status: 'Paid' },
  { userId: 2, courseName: 'Node.js Basics', amount: 700, status: 'Pending' },
  { userId: 3, courseName: 'Advanced JavaScript', amount: 1000, status: 'Paid' },
  // Add more sample data as needed
  { userId: 4, courseName: 'Web Development Project', amount: 1200, status: 'Pending' },
  { userId: 5, courseName: 'React Native Essentials', amount: 800, status: 'Paid' },
  { userId: 6, courseName: 'Database Management', amount: 900, status: 'Pending' },
];

const ResolveButton = ({ rowData, ...props }) => {
  const handleResolve = () => {
    // Add your resolve logic here
    console.log(`Resolve payment with ID ${rowData.userId}`);
  };

  return (
    <Cell {...props}>
      <Button color="green" size="xs" onClick={handleResolve}>
        Resolve
      </Button>
    </Cell>
  );
};

const Payment = () => {
  return (
    <div>
      <header>
        <AdminNav />
      </header>
      <div className='payment'>
        <Table
          height={400}
          data={samplePaymentData}
        >
          <Column width={100} align="center">
            <HeaderCell>User ID</HeaderCell>
            <Cell dataKey="userId" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Course Name</HeaderCell>
            <Cell dataKey="courseName" />
          </Column>

          <Column width={150}>
            <HeaderCell>Amount (INR)</HeaderCell>
            <Cell dataKey="amount" />
          </Column>

          <Column width={150}>
            <HeaderCell>Payment Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Action</HeaderCell>
            <ResolveButton />
          </Column>
        </Table>
      </div>
    </div>
  );
};

export default Payment;
