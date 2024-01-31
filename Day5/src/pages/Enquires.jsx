import "../assets/css/addcourse.css";
import { Table, Button } from 'rsuite';
import AdminNav from "../components/AdminNav";

const { Column, HeaderCell, Cell } = Table;

const sampleData = [
  { userId: 1, userEmail: 'john@example.com', query: 'How to reset password?', status: 'Pending' },
  { userId: 2, userEmail: 'jane@example.com', query: 'Inquiry about course content', status: 'Resolved' },
  { userId: 3, userEmail: 'bob@example.com', query: 'Technical issue with the platform', status: 'In Progress' },
  // Add more sample data as needed
  { userId: 4, userEmail: 'alice@example.com', query: 'Billing inquiry', status: 'Pending' },
  { userId: 5, userEmail: 'charlie@example.com', query: 'Feedback on course materials', status: 'Resolved' },
  { userId: 6, userEmail: 'david@example.com', query: 'Login issues', status: 'In Progress' },
];

const ResolveButton = ({ rowData, ...props }) => {
  const handleResolve = () => {
    // Add your resolve logic here
    console.log(`Resolve query with ID ${rowData.userId}`);
  };

  return (
    <Cell {...props}>
      <Button color="green" size="xs" onClick={handleResolve}>
        Resolve
      </Button>
    </Cell>
  );
};

const Enquires = () => {
  return (
    <div>
      <header>
        <AdminNav />
      </header>
      <div className='enq'>
        <Table
          height={400}
          data={sampleData}
        >
          <Column width={100} align="center">
            <HeaderCell>User ID</HeaderCell>
            <Cell dataKey="userId" />
          </Column>

          <Column width={200}>
            <HeaderCell>User Email</HeaderCell>
            <Cell dataKey="userEmail" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Query</HeaderCell>
            <Cell dataKey="query" />
          </Column>

          <Column width={150}>
            <HeaderCell>Status</HeaderCell>
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

export default Enquires;
