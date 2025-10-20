# 📝 TODO 3.0 - Decentralized Task Management

<div align="center">

![Todo 3.0](https://img.shields.io/badge/Version-3.0-purple?style=for-the-badge)
![Blockchain](https://img.shields.io/badge/Blockchain-Ethereum-blue?style=for-the-badge)
![Smart Contract](https://img.shields.io/badge/Smart_Contract-Solidity_0.8.20-orange?style=for-the-badge)
![Network](https://img.shields.io/badge/Network-Sepolia_Testnet-green?style=for-the-badge)

**A modern, decentralized task management application built on Ethereum blockchain with a stunning glassmorphic UI**

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Architecture](#-architecture) • [API](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Smart Contract](#-smart-contract)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**TODO 3.0** is a cutting-edge decentralized task management application that leverages blockchain technology to provide transparent, immutable, and secure task tracking. Built on the Ethereum Sepolia testnet, it combines the power of smart contracts with a modern, responsive web interface featuring glassmorphism design.

### Why Decentralized?

- **🔒 Immutable Records**: Tasks are stored on the blockchain and cannot be tampered with
- **🌐 Transparent**: All transactions are publicly verifiable
- **💪 Resilient**: No central point of failure
- **🔐 Secure**: Leverages Ethereum's security model
- **👤 Ownership**: You control your data through your wallet

---

## ✨ Features

### Core Functionality
- ✅ **Create Tasks** - Add new tasks with name and due date
- 📋 **View All Tasks** - See all your tasks in a beautiful card layout
- 🔍 **View Specific Task** - Search and view individual tasks by ID
- ✏️ **Update Tasks** - Modify existing task details
- 🗑️ **Delete Tasks** - Remove tasks with priority protection
- 🔗 **Wallet Integration** - Seamless MetaMask connection
- 📋 **Copy Address** - One-click wallet address copying

### User Experience
- 🎨 **Glassmorphism UI** - Modern, aesthetic design
- 🌈 **Vibrant Color Palette** - Purple-pink gradient theme
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- ⚡ **Real-time Updates** - Instant feedback on transactions
- 🔄 **Loading States** - Beautiful loading animations
- 🎭 **Modal Notifications** - Elegant success/error messages
- ✨ **Smooth Animations** - Fade-in, scale, and shimmer effects

### Smart Features
- 🛡️ **Priority Task Protection** - Prevents deletion of important tasks
- 📅 **Date Validation** - Backend validation for task scheduling
- 🔍 **Error Handling** - Comprehensive error management
- 💾 **Transaction Tracking** - View transaction hashes
- 🎯 **Gas Optimization** - Efficient contract interactions

---

## 🛠 Tech Stack

### Frontend
```
├── React 19.1.1          # UI Library
├── Vite 4.5.3            # Build Tool
├── React Router Dom 6    # Client-side Routing
├── Ethers.js v6          # Ethereum Library
└── CSS3                  # Styling (Glassmorphism)
```

### Backend
```
├── Node.js v18.20.8      # Runtime Environment
├── Express.js            # Web Framework
├── Web3.js v4.16.0       # Blockchain Interaction
└── CORS                  # Cross-Origin Resource Sharing
```

### Blockchain
```
├── Solidity 0.8.20       # Smart Contract Language
├── Ethereum              # Blockchain Platform
└── Sepolia Testnet       # Test Network
```

### Development Tools
```
├── ESLint                # Code Linting
├── Git                   # Version Control
└── MetaMask              # Wallet Provider
```

---

## 🏗 Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend (React)                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Wallet     │  │ Create Task  │  │  View Tasks  │      │
│  │  Connection  │  │   Update     │  │    Delete    │      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
│         │                  │                  │              │
│         └──────────────────┴──────────────────┘              │
│                            │                                 │
│                    ┌───────▼────────┐                        │
│                    │  Ethers.js v6  │                        │
│                    │   (Wallet)     │                        │
│                    └───────┬────────┘                        │
└────────────────────────────┼──────────────────────────────────┘
                             │
                    ┌────────▼────────┐
                    │   MetaMask      │
                    │   (Wallet)      │
                    └────────┬────────┘
                             │
        ┌────────────────────┴────────────────────┐
        │                                         │
┌───────▼──────────┐                  ┌───────▼──────────┐
│  Backend (API)   │                  │  Ethereum        │
│  ┌────────────┐  │                  │  Sepolia Testnet │
│  │ Express.js │  │                  │  ┌────────────┐  │
│  │ Web3.js v4 │◄─┼──────────────────┤──│  Contract  │  │
│  │ Validation │  │                  │  │ 0x735EE6B.. │  │
│  └────────────┘  │                  │  └────────────┘  │
└──────────────────┘                  └──────────────────┘
```

### Data Flow

```
┌─────────┐      ┌──────────┐      ┌─────────┐      ┌────────────┐
│  User   │─────►│ Frontend │─────►│ Wallet  │─────►│ Blockchain │
└─────────┘      └──────────┘      └─────────┘      └────────────┘
    ▲                  │                                    │
    │                  ▼                                    │
    │            ┌──────────┐                               │
    └────────────┤  Backend │◄──────────────────────────────┘
                 └──────────┘
              (Validation & Reading)
```

---

## 📜 Smart Contract

### Contract Details

- **Contract Address**: `0x735EE6B0F785De5b39C908Ed6bfB29A306d5455b`
- **Network**: Ethereum Sepolia Testnet
- **Chain ID**: 11155111
- **Solidity Version**: 0.8.20
- **Owner**: `0x01c8A19650E2F8D1247dEc586B1ae484b5Fd9D6d`

### Contract Functions

```solidity
// Core Functions
function createTask(string memory taskName, string memory taskDate) external
function deleteTask(uint256 taskId) external
function updateTask(uint256 taskId, string memory taskName, string memory taskDate) external
function getTask(uint256 taskId) external view returns (Task memory)
function viewAllTasks() external view returns (Task[] memory)

// Utility Functions
function getTotalTasks() external view returns (uint256)
```

### Task Structure

```solidity
struct Task {
    uint256 taskId;      // Unique identifier
    string name;         // Task name
    string date;         // Due date (DD-MM-YYYY)
    bool isDeleted;      // Deletion flag
}
```

### Contract File

See `task.sol` for the complete smart contract implementation.

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v18.20.8 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **MetaMask** browser extension ([Install](https://metamask.io/))
- **Git** for version control

### Step 1: Clone the Repository

```bash
git clone https://github.com/anurag3407/decentralised-To-do.git
cd decentralised-To-do
```

### Step 2: Install Backend Dependencies

```bash
cd api
npm install
```

**Backend Dependencies:**
```json
{
  "express": "^4.21.2",
  "web3": "^4.16.0",
  "cors": "^2.8.5"
}
```

### Step 3: Install Frontend Dependencies

```bash
cd ../client
npm install
```

**Frontend Dependencies:**
```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^6.30.1",
  "ethers": "^6.13.5"
}
```

### Step 4: Configure Environment

#### Backend Configuration

The backend is pre-configured to connect to Sepolia testnet. No additional configuration needed unless you want to change the RPC endpoint.

File: `/api/contract/contract.js`
```javascript
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/demo");
```

#### Frontend Configuration

No environment variables needed. The contract address is hardcoded in the components.

---

## ⚙️ Configuration

### MetaMask Setup

1. **Install MetaMask** from [metamask.io](https://metamask.io/)
2. **Create or Import Wallet**
3. **Add Sepolia Network** (if not already added):
   - Network Name: `Sepolia Test Network`
   - RPC URL: `https://eth-sepolia.g.alchemy.com/v2/demo`
   - Chain ID: `11155111`
   - Currency Symbol: `SepoliaETH`
   - Block Explorer: `https://sepolia.etherscan.io`

4. **Get Test ETH** from a faucet:
   - [Alchemy Faucet](https://sepoliafaucet.com/)
   - [Infura Faucet](https://www.infura.io/faucet/sepolia)

### Contract Configuration

The contract is already deployed. To use a different contract:

1. Update the contract address in:
   - `/client/src/Pages/Wallet.jsx` (line 29)
   - `/api/contract/contract.js` (line 5)

2. Update the ABI in:
   - `/client/src/Pages/ABI.json`
   - `/api/contract/ABI.json`

---

## 🎮 Usage

### Starting the Application

#### 1. Start Backend Server

```bash
cd api
node server.js
```

**Expected Output:**
```
Server is running on port 3000
Connected to Sepolia testnet
```

The backend will be available at: `http://localhost:3000`

#### 2. Start Frontend Development Server

```bash
cd client
npm run dev
```

**Expected Output:**
```
VITE v4.5.3  ready in 113 ms
➜  Local:   http://localhost:5173/
```

The frontend will be available at: `http://localhost:5173/`

### Using the Application

#### 1. Connect Your Wallet

1. Open `http://localhost:5173/` in your browser
2. Click the **"Connect Wallet"** button
3. Approve the connection in MetaMask
4. Your wallet address will appear in the navigation bar
5. Click the 📋 icon to copy your address

#### 2. Create a Task

1. Navigate to **"Create Task"** from the menu
2. Enter task name (e.g., "Complete project documentation")
3. Select a due date
4. Click **"Create Task"**
5. Confirm the transaction in MetaMask
6. Wait for blockchain confirmation
7. Success message will appear with transaction hash

#### 3. View All Tasks

1. Click **"View All Tasks"** in the navigation
2. See all your tasks displayed in beautiful cards
3. Each card shows:
   - Task ID (unique identifier)
   - Task Name
   - Due Date

#### 4. View Specific Task

1. Navigate to **"View Task"**
2. Enter the Task ID
3. Click **"View Task"**
4. Task details will be displayed

#### 5. Update a Task

1. Go to **"Update Task"**
2. Enter the Task ID you want to update
3. Enter new task name
4. Select new due date
5. Click **"Update Task"**
6. Confirm transaction in MetaMask
7. Wait for confirmation

#### 6. Delete a Task

1. Navigate to **"Delete Task"**
2. Enter the Task ID
3. Click **"Delete Task"**
4. Confirm transaction in MetaMask
5. **Note**: Priority tasks cannot be deleted (server-side validation)

---

## 📡 API Documentation

### Base URL
```
http://localhost:3000/api/ethereum
```

### Endpoints

#### 1. View All Tasks

```http
GET /api/ethereum/view-all-task
```

**Response:**
```json
{
  "status": 200,
  "taskList": [
    {
      "taskId": "1",
      "name": "Complete project",
      "date": "25-10-2025"
    }
  ]
}
```

#### 2. View Specific Task

```http
GET /api/ethereum/view-task/:id
```

**Parameters:**
- `id` (path) - Task ID

**Response:**
```json
{
  "status": 200,
  "taskObj": {
    "numId": "1",
    "name": "Complete project",
    "date": "25-10-2025"
  }
}
```

**Error Response:**
```json
{
  "status": 404,
  "message": "Task does not exist"
}
```

#### 3. Validate Task Date

```http
POST /api/ethereum/date-clash/:date
```

**Parameters:**
- `date` (path) - Date in DD-MM-YYYY format

**Response:**
```json
{
  "status": 200
}
```

**Error Response:**
```json
{
  "status": 409,
  "message": "Date clashes with another task, please change the date"
}
```

#### 4. Delete Task (Validation)

```http
DELETE /api/ethereum/delete-task/:id
```

**Parameters:**
- `id` (path) - Task ID

**Response:**
```json
{
  "status": 200
}
```

**Error Response:**
```json
{
  "status": 403,
  "message": "It is a priority task that cannot be deleted"
}
```

### Error Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 403 | Forbidden (Priority task) |
| 404 | Task not found |
| 409 | Conflict (Date clash) |
| 500 | Server error |

---

## 🎨 Design Features

### Color Palette

```css
Primary:     #667eea (Soft indigo)
Secondary:   #764ba2 (Rich purple)
Accent:      #f093fb (Soft pink)
Success:     #06d6a0 (Vibrant teal)
Warning:     #ffd93d (Golden yellow)
Error:       #ff6b6b (Coral red)
Background:  #0f0f23 → #2d1b4e (Space gradient)
```

### Typography

- **Headings**: 36px - 56px (Bold 800)
- **Body**: 17px - 19px (Medium 500)
- **Labels**: 14px - 15px (Semi-bold 600)
- **Small**: 13px - 14px (Regular 400)

### Animations

- **fadeIn**: Smooth appearance
- **fadeInUp**: Slide up with fade
- **scaleIn**: Scale from center
- **shimmer**: Continuous glow effect
- **spin**: Loading spinner

### Responsive Breakpoints

```css
Desktop:  > 1024px
Tablet:   768px - 1024px
Mobile:   < 768px
Small:    < 480px
```

---

## 🚢 Deployment

### Deploy Backend

#### Option 1: Heroku

```bash
cd api
heroku create your-app-name
heroku config:set NODE_ENV=production
git push heroku master
```

#### Option 2: DigitalOcean

1. Create a Droplet
2. Install Node.js
3. Clone repository
4. Install dependencies
5. Use PM2 for process management:

```bash
npm install -g pm2
pm2 start server.js
pm2 save
pm2 startup
```

### Deploy Frontend

#### Option 1: Vercel

```bash
cd client
npm install -g vercel
vercel
```

#### Option 2: Netlify

```bash
cd client
npm run build
# Upload 'dist' folder to Netlify
```

#### Build Configuration

```bash
npm run build
```

**Build Output:** `/client/dist`

### Deploy Smart Contract

To deploy to mainnet or another network:

```bash
# Using Remix IDE
1. Open remix.ethereum.org
2. Upload task.sol
3. Compile with Solidity 0.8.20
4. Deploy using Injected Provider (MetaMask)
5. Save contract address and ABI
```

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Wallet connection successful
- [ ] Create task with valid data
- [ ] View all tasks displays correctly
- [ ] View specific task by ID
- [ ] Update task information
- [ ] Delete task (non-priority)
- [ ] Priority task deletion blocked
- [ ] Date clash validation works
- [ ] Transaction confirmations appear
- [ ] Error messages display properly
- [ ] Responsive on mobile devices
- [ ] Copy wallet address feature works

### Test Accounts

Use Sepolia testnet with test ETH from faucets.

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### 1. Fork the Repository

```bash
git clone https://github.com/yourusername/decentralised-To-do.git
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/amazing-feature
```

### 3. Make Your Changes

- Follow the existing code style
- Add comments for complex logic
- Test thoroughly

### 4. Commit Your Changes

```bash
git add .
git commit -m "Add: Amazing new feature"
```

**Commit Message Convention:**
- `Add:` New feature
- `Fix:` Bug fix
- `Update:` Improvement
- `Remove:` Deletion
- `Docs:` Documentation

### 5. Push to Your Fork

```bash
git push origin feature/amazing-feature
```

### 6. Open a Pull Request

- Describe your changes
- Link any related issues
- Wait for review

---

## 📝 Project Structure

```
decentralised-To-do/
├── api/                          # Backend server
│   ├── contract/
│   │   ├── contract.js           # Web3 contract instance
│   │   └── ABI.json              # Contract ABI
│   ├── models/
│   │   └── task.js               # Task validation logic
│   ├── routes/
│   │   └── taskRoute.js          # API routes
│   ├── server.js                 # Express server
│   └── package.json
│
├── client/                       # Frontend application
│   ├── public/                   # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   └── Navigation.jsx    # Navigation header
│   │   ├── Pages/
│   │   │   ├── Wallet.jsx        # Wallet connection
│   │   │   ├── CreateTask.jsx    # Create task form
│   │   │   ├── ViewAllTask.jsx   # Task list view
│   │   │   ├── ViewTask.jsx      # Single task view
│   │   │   ├── UpdateTask.jsx    # Update task form
│   │   │   ├── DeleteTask.jsx    # Delete task form
│   │   │   └── ABI.json          # Contract ABI
│   │   ├── App.jsx               # Main app component
│   │   ├── index.css             # Global styles
│   │   └── main.jsx              # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── task.sol                      # Smart contract
├── README.md                     # This file
├── SETUP_COMPLETE.md             # Setup documentation
├── ETHERS_MIGRATION.md           # Migration notes
├── UI_UX_ENHANCEMENTS.md         # Design documentation
├── WALLET_ADDRESS_FEATURE.md     # Feature documentation
└── TYPOGRAPHY_IMPROVEMENTS.md    # Typography guide
```

---

## 🔒 Security Considerations

### Smart Contract Security

- ✅ Owner-only functions where necessary
- ✅ Input validation
- ✅ Reentrancy protection (not applicable for current functions)
- ✅ Integer overflow protection (Solidity 0.8.20 built-in)

### Frontend Security

- ✅ Never expose private keys
- ✅ Validate all user inputs
- ✅ Use secure RPC endpoints
- ✅ Implement proper error handling
- ✅ Sanitize blockchain data before display

### Backend Security

- ✅ CORS configuration
- ✅ Input validation
- ✅ Error handling
- ✅ Rate limiting (recommended for production)

### Best Practices

1. **Never commit private keys** to version control
2. **Use environment variables** for sensitive data
3. **Keep dependencies updated** regularly
4. **Audit smart contracts** before mainnet deployment
5. **Test thoroughly** on testnets
6. **Use hardware wallets** for mainnet with real funds

---

## 🐛 Troubleshooting

### Common Issues

#### 1. MetaMask Not Connecting

**Solution:**
- Ensure MetaMask is installed
- Check if you're on Sepolia network
- Try disconnecting and reconnecting
- Clear browser cache

#### 2. Transaction Failing

**Solution:**
- Check if you have enough SepoliaETH for gas
- Verify contract address is correct
- Check network congestion
- Increase gas limit if needed

#### 3. Backend Not Starting

**Solution:**
- Check if port 3000 is available
- Verify Node.js version (v18.20.8)
- Run `npm install` again
- Check RPC endpoint is accessible

#### 4. Frontend Build Errors

**Solution:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version compatibility
- Verify all dependencies are installed

#### 5. Contract Read Errors

**Solution:**
- Verify you're on the correct network
- Check contract address is correct
- Ensure RPC endpoint is working
- Check if contract is deployed

---

## 📚 Additional Resources

### Learning Resources

- [Solidity Documentation](https://docs.soliditylang.org/)
- [Ethers.js Documentation](https://docs.ethers.org/)
- [React Documentation](https://react.dev/)
- [Web3.js Documentation](https://web3js.readthedocs.io/)
- [MetaMask Documentation](https://docs.metamask.io/)

### Ethereum Sepolia

- [Sepolia Explorer](https://sepolia.etherscan.io/)
- [Sepolia Faucet](https://sepoliafaucet.com/)
- [Alchemy Dashboard](https://dashboard.alchemy.com/)

### Design Inspiration

- [Glassmorphism](https://glassmorphism.com/)
- [Gradient Magic](https://www.gradientmagic.com/)
- [Color Hunt](https://colorhunt.co/)

---

## 📊 Project Stats

- **Lines of Code**: ~3000+
- **Components**: 7 React components
- **API Endpoints**: 4 REST endpoints
- **Smart Contract Functions**: 6 public functions
- **Supported Networks**: Ethereum Sepolia
- **Responsive Breakpoints**: 3 (Mobile, Tablet, Desktop)

---

## 🎯 Roadmap

### Phase 1: Foundation ✅
- [x] Smart contract development
- [x] Basic CRUD operations
- [x] Wallet integration
- [x] Glassmorphic UI

### Phase 2: Enhanced Features 🚧
- [ ] Task categories/tags
- [ ] Task priority levels
- [ ] Due date reminders
- [ ] Task completion status
- [ ] Search and filter functionality

### Phase 3: Advanced Features 📋
- [ ] Multi-user collaboration
- [ ] Task assignment
- [ ] IPFS integration for file attachments
- [ ] ENS domain support
- [ ] Mobile app (React Native)

### Phase 4: Production 🎯
- [ ] Mainnet deployment
- [ ] Gas optimization
- [ ] Full security audit
- [ ] Performance optimization
- [ ] CDN integration

---

## 🏆 Acknowledgments

- **Ethereum Community** for blockchain infrastructure
- **Alchemy** for RPC services
- **MetaMask** for wallet provider
- **React Team** for the amazing UI library
- **Vite Team** for the fast build tool
- **OpenZeppelin** for smart contract standards

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Anurag

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📧 Contact

**Anurag**

- GitHub: [@anurag3407](https://github.com/anurag3407)
- Project Link: [https://github.com/anurag3407/decentralised-To-do](https://github.com/anurag3407/decentralised-To-do)

---

## 💝 Support

If you found this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code
- 📢 Sharing with others

---

<div align="center">

**Made with ❤️ and ☕ by Anurag**

[⬆ Back to Top](#-todo-30---decentralized-task-management)

</div>
