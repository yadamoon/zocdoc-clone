import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive' | 'Pending';
  specialization: string;
  listings: number;
  sales: number;
  rating: number;
  joinDate: Date;
  avatar: string;
  commission: number;
  verified: boolean;
}

@Component({
  selector: 'app-admin-agents',
  templateUrl: './agents.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AgentsComponent implements OnInit {
  agents: Agent[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@realestate.com',
      phone: '+1 (234) 567-8901',
      status: 'Active',
      specialization: 'Luxury Properties',
      listings: 24,
      sales: 156,
      rating: 4.8,
      joinDate: new Date('2023-06-15'),
      avatar: 'assets/images/agents/agent-1.jpg',
      commission: 3.5,
      verified: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@realestate.com',
      phone: '+1 (234) 567-8902',
      status: 'Active',
      specialization: 'Commercial Properties',
      listings: 18,
      sales: 132,
      rating: 4.6,
      joinDate: new Date('2023-08-20'),
      avatar: 'assets/images/agents/agent-2.jpg',
      commission: 3.0,
      verified: true
    }
  ];

  selectedAgents: number[] = [];
  searchTerm: string = '';
  filterStatus: string = 'all';
  sortBy: string = 'performance';

  ngOnInit(): void {
    // Initialize data if needed
  }

  toggleAgentSelection(id: number) {
    const index = this.selectedAgents.indexOf(id);
    if (index === -1) {
      this.selectedAgents.push(id);
    } else {
      this.selectedAgents.splice(index, 1);
    }
  }

  toggleAllSelection() {
    if (this.selectedAgents.length === this.agents.length) {
      this.selectedAgents = [];
    } else {
      this.selectedAgents = this.agents.map(a => a.id);
    }
  }

  updateAgentStatus(agent: Agent, status: 'Active' | 'Inactive' | 'Pending') {
    agent.status = status;
  }

  deleteSelected() {
    if (confirm('Are you sure you want to delete the selected agents?')) {
      this.agents = this.agents.filter(a => !this.selectedAgents.includes(a.id));
      this.selectedAgents = [];
    }
  }

  get filteredAgents() {
    return this.agents
      .filter(a => {
        const matchesSearch = a.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          a.email.toLowerCase().includes(this.searchTerm.toLowerCase());
        const matchesStatus = this.filterStatus === 'all' || a.status.toLowerCase() === this.filterStatus.toLowerCase();
        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        switch (this.sortBy) {
          case 'performance':
            return b.sales - a.sales;
          case 'listings':
            return b.listings - a.listings;
          case 'rating':
            return b.rating - a.rating;
          default:
            return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
        }
      });
  }

  exportAgents() {
    // Implement export functionality
    console.log('Exporting agents...');
  }
}
