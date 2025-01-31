"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";

interface Message {
  exchange: string;
  duration: string;
  nodeElapsedTime: string;
  atNode: string;
  fromRoute: string;
  atRoute: string;
  inputName: string;
  status: string;
}

const initialMessages: Message[] = [
  {
    exchange: "EX123",
    duration: "120ms",
    nodeElapsedTime: "80ms",
    atNode: "Node A",
    fromRoute: "Route 1",
    atRoute: "Route 2",
    inputName: "Input A",
    status: "Active",
  },
  {
    exchange: "EX456",
    duration: "150ms",
    nodeElapsedTime: "90ms",
    atNode: "Node B",
    fromRoute: "Route 2",
    atRoute: "Route 3",
    inputName: "Input B",
    status: "Pending",
  },
];

export function InflightMessages() {
  const [messages, _setMessages] = useState<Message[]>(initialMessages);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMessages = messages.filter((msg) =>
    Object.values(msg).some((val) =>
      val.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="container">
      <h2 className="info-heading">Inflight Messages</h2>
      <div className="search-container">
        <div className="search-bar">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="search-info">
          ({filteredMessages.length}) message(s) in-flight
        </div>
      </div>

      <div className="table-container">
        <Table>
          <TableHeader className="table-header">
            <TableRow>
              {[
                "Exchange",
                "Duration",
                "Node Elapsed Time",
                "At Node",
                "From Route",
                "At Route",
                "Input Name",
                "Status",
              ].map((header) => (
                <TableHead key={header} className="table-head">
                  {header} ↕
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredMessages.length > 0 ? (
              filteredMessages.map((msg, index) => (
                <TableRow key={index}>
                  <TableCell>{msg.exchange}</TableCell>
                  <TableCell>{msg.duration}</TableCell>
                  <TableCell>{msg.nodeElapsedTime}</TableCell>
                  <TableCell>{msg.atNode}</TableCell>
                  <TableCell>{msg.fromRoute}</TableCell>
                  <TableCell>{msg.atRoute}</TableCell>
                  <TableCell>{msg.inputName}</TableCell>
                  <TableCell>{msg.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="no-records">
                  No records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="pagination-container">
        <div className="pagination-buttons">
          <Button className="pagination-btn" disabled>
            <ChevronsLeft className="icon" />
          </Button>
          <Button className="pagination-btn" disabled>
            <ChevronLeft className="icon" />
          </Button>
          <Button className="pagination-btn active">1</Button>
          <Button className="pagination-btn" disabled>
            <ChevronRight className="icon" />
          </Button>
          <Button className="pagination-btn" disabled>
            <ChevronsRight className="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
}
