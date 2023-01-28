import { FC } from "react";
import styled from "styled-components";
import { colors } from "../../utils/utilColors";
interface TableProps {
  data: (number | undefined)[];
}

const Table: FC<TableProps> = ({ data }) => {
  const header = ["공격", "특공", "방어", "특방", "체력", "스피드"];
  return (
    <TableWrapper>
      {header.map((value, index) => {
        return <th key={`header-${value}`}>{value}</th>;
      })}
      <tr>
        {data.map((value, index) => {
          return <td key={`header-${value}`}>{value}</td>;
        })}
      </tr>
    </TableWrapper>
  );
};

const TableWrapper = styled.table`
  background-color: white;
  border-radius: 20px;
  border: 1px solid black;
  th {
    padding: 5px 10px;
  }
  td {
    padding: 5px 10px;
  }
`;

export default Table;
