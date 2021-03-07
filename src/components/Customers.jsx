import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  Container,
  Button,
  Flex,
} from "@chakra-ui/react";
import _ from "lodash";

function renderTableContents(data) {
  return _.map(data, (e) => {
    return (
      <Tr key={e.customerid}>
        <Td>
          <Link to={"customer/" + e.customerid}>{e.companyname}</Link>
        </Td>
        <Td>{e.companytype.companytype}</Td>
        <Td>{e.street}</Td>
        <Td>{e.city}</Td>
        <Td>{e.phonenumber}</Td>
        <Td>{e.employee.codename}</Td>
      </Tr>
    );
  });
}

export default function () {
  const [state, setState] = useState({});

  const fetchData = (link) => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => setState(data));
  };

  useEffect(() => {
    fetchData("http://127.0.0.1:8000/customers/");
    console.log("BRUH");
  }, []);

  return (
    <Flex direction="row" justify="space-between">
      <Button onClick={() => fetchData(state.previous)}>Previous</Button>
      <Table variant="striped" colorScheme="teal" size="l" w="99vh">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Branch</Th>
            <Th>Street</Th>
            <Th>City</Th>
            <Th>Tel.</Th>
            <Th>Mitarbeiter</Th>
          </Tr>
        </Thead>
        <Tbody>{renderTableContents(state.results)}</Tbody>
      </Table>
      <Button onClick={() => fetchData(state.next)}>Next</Button>
    </Flex>
  );
}
