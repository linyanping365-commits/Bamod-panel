import { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock, Mail, ArrowLeft, LogOut, CheckCircle, Loader2, LayoutDashboard, Home, Calendar, Star, MessageSquare, HelpCircle, Folder, Settings, User, ChevronDown, RefreshCw, Inbox, Target, DollarSign, FileText, Layers, Globe, Network, Repeat, MapPin, Server, Smartphone, Monitor, Compass, Wrench, AlertCircle, Search, Plus, Edit2, Activity, Flag, Upload, BarChart2, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight, Play } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type ViewState = 'login' | 'register' | 'forgot' | 'dashboard' | 'home';

interface Campaign {
  id: string;
  name: string;
  url: string;
  country: string;
}

const COUNTRIES = [
  "Global", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const chartData = [
  { time: '11. Apr', impressions: 0, visits: 0, clicks: 0, conversionsAll: 0, conversionsApproved: 0, revenue: 0, cost: 0, profit: 0, hiddenProfit: 0, hiddenRevenue: 0, hiddenRevenueConfirmed: 0 },
  { time: '02:00', impressions: 0, visits: 0, clicks: 0, conversionsAll: 0, conversionsApproved: 0, revenue: 0, cost: 0, profit: 0, hiddenProfit: 0, hiddenRevenue: 0, hiddenRevenueConfirmed: 0 },
  { time: '04:00', impressions: 0, visits: 0, clicks: 0, conversionsAll: 0, conversionsApproved: 0, revenue: 0, cost: 0, profit: 0, hiddenProfit: 0, hiddenRevenue: 0, hiddenRevenueConfirmed: 0 },
  { time: '06:00', impressions: 0, visits: 0, clicks: 0, conversionsAll: 0, conversionsApproved: 0, revenue: 0, cost: 0, profit: 0, hiddenProfit: 0, hiddenRevenue: 0, hiddenRevenueConfirmed: 0 },
  { time: '08:00', impressions: 0, visits: 0, clicks: 0, conversionsAll: 0, conversionsApproved: 0, revenue: 0, cost: 0, profit: 0, hiddenProfit: 0, hiddenRevenue: 0, hiddenRevenueConfirmed: 0 },
  { time: '10:00', impressions: 0, visits: 0, clicks: 0, conversionsAll: 0, conversionsApproved: 0, revenue: 0, cost: 0, profit: 0, hiddenProfit: 0, hiddenRevenue: 0, hiddenRevenueConfirmed: 0 },
  { time: '12:00', impressions: 0, visits: 0, clicks: 0, conversionsAll: 0, conversionsApproved: 0, revenue: 0, cost: 0, profit: 0, hiddenProfit: 0, hiddenRevenue: 0, hiddenRevenueConfirmed: 0 },
  { time: '14:00', impressions: 0, visits: 0, clicks: 0, conversionsAll: 0, conversionsApproved: 0, revenue: 0, cost: 0, profit: 0, hiddenProfit: 0, hiddenRevenue: 0, hiddenRevenueConfirmed: 0 },
  { time: '16:00', impressions: 0, visits: 0, clicks: 0, conversionsAll: 0, conversionsApproved: 0, revenue: 0, cost: 0, profit: 0, hiddenProfit: 0, hiddenRevenue: 0, hiddenRevenueConfirmed: 0 },
  { time: '18:00', impressions: 0, visits: 0, clicks: 0, conversionsAll: 0, conversionsApproved: 0, revenue: 0, cost: 0, profit: 0, hiddenProfit: 0, hiddenRevenue: 0, hiddenRevenueConfirmed: 0 },
  { time: '20:00', impressions: 0, visits: 0, clicks: 0, conversionsAll: 0, conversionsApproved: 0, revenue: 0, cost: 0, profit: 0, hiddenProfit: 0, hiddenRevenue: 0, hiddenRevenueConfirmed: 0 },
  { time: '22:00', impressions: 0, visits: 0, clicks: 0, conversionsAll: 0, conversionsApproved: 0, revenue: 0, cost: 0, profit: 0, hiddenProfit: 0, hiddenRevenue: 0, hiddenRevenueConfirmed: 0 },
];

export default function App() {
  const [view, setView] = useState<ViewState>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [isNewCampaignModalOpen, setIsNewCampaignModalOpen] = useState(false);
  const [isCampaignLinksModalOpen, setIsCampaignLinksModalOpen] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [contextMenu, setContextMenu] = useState<{x: number, y: number, campaignId: string} | null>(null);
  const [campaignName, setCampaignName] = useState('');
  const [campaignUrl, setCampaignUrl] = useState('');
  const [campaignCountry, setCampaignCountry] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const handleClick = () => setContextMenu(null);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Check for existing session on load
  useEffect(() => {
    const currentUser = localStorage.getItem('bamod_current_user');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      setEmail(user.email);
      setName(user.name);
      setView('dashboard');
    }
  }, []);

  const simulateNetwork = async (callback: () => void) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    callback();
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    if (!email || !password) return;
    
    simulateNetwork(() => {
      const users = JSON.parse(localStorage.getItem('bamod_users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        setName(user.name);
        localStorage.setItem('bamod_current_user', JSON.stringify(user));
        setView('dashboard');
      } else {
        setAuthError('Invalid email or password. Please register first.');
      }
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    if (!email || !password || !name) return;
    
    simulateNetwork(() => {
      const users = JSON.parse(localStorage.getItem('bamod_users') || '[]');
      if (users.find((u: any) => u.email === email)) {
        setAuthError('Email is already registered. Please sign in.');
        return;
      }
      
      const newUser = { email, password, name };
      users.push(newUser);
      localStorage.setItem('bamod_users', JSON.stringify(users));
      localStorage.setItem('bamod_current_user', JSON.stringify(newUser));
      setView('dashboard');
    });
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    simulateNetwork(() => setResetSent(true));
  };

  const handleLogout = () => {
    setEmail('');
    setPassword('');
    setName('');
    setResetSent(false);
    setAuthError('');
    localStorage.removeItem('bamod_current_user');
    setView('login');
  };

  const Logo = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <span className="text-3xl font-bold text-gray-900 tracking-tight">Bamod</span>
    </div>
  );

  if (view === 'dashboard' || view === 'home') {
    return (
      <div className="min-h-screen bg-[#f4f6f9] flex flex-col font-sans text-sm">
        {/* Top Navigation */}
        <nav className="bg-[#2c3e50] text-white flex items-center justify-between h-12 px-4 shadow-sm z-10">
          <div className="flex items-center h-full">
            <div className="flex items-center gap-2 mr-6 font-bold text-lg">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Bamod
            </div>
            <div className="flex h-full">
              <button 
                onClick={() => setView('dashboard')}
                className={`flex items-center gap-2 px-4 font-medium h-full transition-colors ${view === 'dashboard' ? 'bg-white text-gray-800' : 'text-gray-300 hover:bg-[#34495e]'}`}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </button>
              <button 
                onClick={() => setView('home')}
                className={`flex items-center gap-2 px-4 font-medium h-full transition-colors ${view === 'home' ? 'bg-white text-gray-800' : 'text-gray-300 hover:bg-[#34495e]'}`}
              >
                <Home className="w-4 h-4" />
                Home
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <button onClick={handleLogout} className="flex items-center gap-2 hover:text-white transition-colors ml-2">
              <User className="w-4 h-4" />
              Welcome, {name || email.split('@')[0] || 'User'}
            </button>
          </div>
        </nav>

        {view === 'home' && (
          <div className="flex flex-col flex-1">
            {/* Toolbar */}
            <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between shadow-sm z-0">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                    <Search className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-48 pl-8 pr-3 py-1.5 border border-gray-300 rounded text-xs focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button 
                  onClick={() => {
                    setEditingId(null);
                    setCampaignName('');
                    setCampaignUrl('');
                    setCampaignCountry('');
                    setIsNewCampaignModalOpen(true);
                  }}
                  className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50 text-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  New
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 ml-2">
                  <button 
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                  ><ChevronsLeft className="w-4 h-4" /></button>
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                  ><ChevronLeft className="w-4 h-4" /></button>
                  <input type="text" value={currentPage} readOnly className="w-8 text-center border border-gray-300 rounded py-1 text-xs" />
                  <span className="text-xs text-gray-500 mx-1">of {Math.ceil(campaigns.filter(c => !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.country.toLowerCase().includes(searchQuery.toLowerCase())).length / 50) || 1}</span>
                  <button 
                    onClick={() => setCurrentPage(p => Math.min(Math.ceil(campaigns.filter(c => !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.country.toLowerCase().includes(searchQuery.toLowerCase())).length / 50) || 1, p + 1))}
                    disabled={currentPage === (Math.ceil(campaigns.filter(c => !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.country.toLowerCase().includes(searchQuery.toLowerCase())).length / 50) || 1)}
                    className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                  ><ChevronRight className="w-4 h-4" /></button>
                  <button 
                    onClick={() => setCurrentPage(Math.ceil(campaigns.filter(c => !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.country.toLowerCase().includes(searchQuery.toLowerCase())).length / 50) || 1)}
                    disabled={currentPage === (Math.ceil(campaigns.filter(c => !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.country.toLowerCase().includes(searchQuery.toLowerCase())).length / 50) || 1)}
                    className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                  ><ChevronsRight className="w-4 h-4" /></button>
                </div>

                <button 
                  onClick={() => {
                    setIsRefreshing(true);
                    setTimeout(() => setIsRefreshing(false), 1000);
                  }}
                  className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50 text-xs ml-2"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Update
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#f4f6f9] overflow-auto relative">
              {contextMenu && (
                <div 
                  className="fixed bg-white border border-gray-200 shadow-lg rounded py-1 z-50 text-sm w-32"
                  style={{ top: contextMenu.y, left: contextMenu.x }}
                >
                  <button 
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => {
                      const c = campaigns.find(camp => camp.id === contextMenu.campaignId);
                      if (c) {
                        setEditingId(c.id);
                        setCampaignName(c.name);
                        setCampaignUrl(c.url);
                        setCampaignCountry(c.country);
                        setIsNewCampaignModalOpen(true);
                      }
                    }}
                  >
                    <Edit2 className="w-3.5 h-3.5" /> Edit
                  </button>
                  <button 
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 flex items-center gap-2"
                    onClick={() => {
                      setCampaigns(campaigns.filter(camp => camp.id !== contextMenu.campaignId));
                    }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg> Delete
                  </button>
                </div>
              )}
              {campaigns.length > 0 ? (
                <div className="w-max min-w-full">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#2c3e50] text-white">
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> Campaign <span className="ml-auto">▲</span></div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> Visits <span className="ml-auto">▲</span></div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> Unique...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> WebVie...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> Clicks</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> Unique...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> WebVie...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> Conversions (...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> Conversions (...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> Revenue</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> Hidden...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> Cost</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> Profit</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> CPV</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> CPC</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> CTR</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> CTR, 1/x</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> UCTR</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> CR</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> CR, 1/x</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> CV</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> CV, 1/x</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> ROI</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> EPV</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> EPC</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> AP</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {campaigns
                        .filter(c => !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.country.toLowerCase().includes(searchQuery.toLowerCase()))
                        .slice((currentPage - 1) * 50, currentPage * 50)
                        .map(campaign => (
                        <tr 
                          key={campaign.id} 
                          className="hover:bg-gray-50 cursor-context-menu"
                          onContextMenu={(e) => {
                            e.preventDefault();
                            setContextMenu({ x: e.clientX, y: e.clientY, campaignId: campaign.id });
                          }}
                        >
                          <td className="p-2 border border-gray-200 whitespace-nowrap">{campaign.country} - None - {campaign.name}</td>
                          <td className="p-2 border border-gray-200 text-right">0</td>
                          <td className="p-2 border border-gray-200 text-right">0</td>
                          <td className="p-2 border border-gray-200 text-right">0</td>
                          <td className="p-2 border border-gray-200 text-right">0</td>
                          <td className="p-2 border border-gray-200 text-right">0</td>
                          <td className="p-2 border border-gray-200 text-right">0</td>
                          <td className="p-2 border border-gray-200 text-right">0</td>
                          <td className="p-2 border border-gray-200 text-right">0</td>
                          <td className="p-2 border border-gray-200 text-right">$ 0.000</td>
                          <td className="p-2 border border-gray-200 text-right">$ 0.000</td>
                          <td className="p-2 border border-gray-200 text-right">$ 0.000</td>
                          <td className="p-2 border border-gray-200 text-right">$ 0.000</td>
                          <td className="p-2 border border-gray-200 text-right">$ 0.0000</td>
                          <td className="p-2 border border-gray-200 text-right">$ 0.0000</td>
                          <td className="p-2 border border-gray-200 text-right">0.000%</td>
                          <td className="p-2 border border-gray-200 text-right">1 : 0.000</td>
                          <td className="p-2 border border-gray-200 text-right">0.000%</td>
                          <td className="p-2 border border-gray-200 text-right">0.000%</td>
                          <td className="p-2 border border-gray-200 text-right">1 : 0.000</td>
                          <td className="p-2 border border-gray-200 text-right">0.000%</td>
                          <td className="p-2 border border-gray-200 text-right">1 : 0.000</td>
                          <td className="p-2 border border-gray-200 text-right">0.000%</td>
                          <td className="p-2 border border-gray-200 text-right">$ 0.0000</td>
                          <td className="p-2 border border-gray-200 text-right">$ 0.0000</td>
                          <td className="p-2 border border-gray-200 text-right">$ 0.000</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="flex items-center justify-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {view === 'dashboard' && (
          <main className="flex-1 p-6 max-w-[1600px] mx-auto w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-normal text-gray-800">Dashboard</h1>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Active
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  $ USD
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                <button 
                  onClick={() => {
                    setIsRefreshing(true);
                    setTimeout(() => setIsRefreshing(false), 1000);
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Update
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-7 gap-4 mb-8">
              {[
                { label: 'Visits', value: '0' },
                { label: 'Clicks', value: '0' },
                { label: 'Conversions', value: '0' },
                { label: 'Revenue', value: '$ 0.00' },
                { label: 'Cost', value: '$ 0.00' },
                { label: 'Profit', value: '$ 0.00' },
                { label: 'ROI', value: '0.00%' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded p-4 text-center shadow-sm">
                  <div className="text-2xl text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Statistics Section */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold text-gray-800">Statistics</h2>
            </div>

            {/* Grid Panels */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Campaigns */}
              <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden flex flex-col h-64">
                <div className="bg-[#2c3e50] text-white px-4 py-2 flex justify-between font-bold text-xs">
                  <span>Campaigns</span>
                  <span>Profit</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                  <Inbox className="w-12 h-12 mb-2 opacity-50" />
                  <span>No data matches this search criteria</span>
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden flex flex-col h-64">
                <div className="bg-[#2c3e50] text-white px-4 py-2 flex justify-between font-bold text-xs">
                  <span>Traffic Sources</span>
                  <span>Profit</span>
                </div>
                <div className="overflow-y-auto flex-1">
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700 italic">None</td>
                        <td className="px-4 py-3 text-right text-gray-500">$ 0.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Countries */}
              <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden flex flex-col h-64">
                <div className="bg-[#2c3e50] text-white px-4 py-2 flex justify-between font-bold text-xs">
                  <span>Countries</span>
                  <span>Profit</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                  <Inbox className="w-12 h-12 mb-2 opacity-50" />
                  <span>No data matches this search criteria</span>
                </div>
              </div>

              {/* Offers */}
              <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden flex flex-col h-64">
                <div className="bg-[#2c3e50] text-white px-4 py-2 flex justify-between font-bold text-xs">
                  <span>Offers</span>
                  <span>Profit</span>
                </div>
                <div className="overflow-y-auto flex-1">
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700 italic">Direct URL</td>
                        <td className="px-4 py-3 text-right text-gray-500">$ 0.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white border border-gray-200 rounded shadow-sm p-6 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 12 }} domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} dx={-10} />
                  <Tooltip />
                  <Legend 
                    wrapperStyle={{ bottom: -10, fontSize: '12px' }}
                    iconType="square"
                    iconSize={8}
                  />
                  <Line type="monotone" dataKey="impressions" name="Impressions" stroke="#e74c3c" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="visits" name="Visits" stroke="#2ecc71" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="clicks" name="Clicks" stroke="#f1c40f" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="conversionsAll" name="Conversions (All)" stroke="#3498db" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="conversionsApproved" name="Conversions (Approved)" stroke="#e67e22" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#9b59b6" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="cost" name="Cost" stroke="#1abc9c" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="profit" name="Profit" stroke="#e84393" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="hiddenProfit" name="Hidden Profit" stroke="#00cec9" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="hiddenRevenue" name="Hidden Revenue" stroke="#fdcb6e" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="hiddenRevenueConfirmed" name="Hidden Revenue (Confirmed)" stroke="#ff7675" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </main>
        )}

        {/* New Campaign Modal */}
        {isNewCampaignModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white w-full max-w-6xl h-[90vh] flex flex-col rounded-md shadow-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="bg-[#3b5998] text-white px-4 py-3 flex items-center justify-between">
                <h2 className="text-lg font-medium">New Campaign</h2>
                <div className="flex items-center gap-4 text-sm">
                  <button onClick={() => setIsNewCampaignModalOpen(false)} className="hover:text-gray-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-hidden flex bg-white">
                {/* Left Column */}
                <div className="w-1/2 border-r border-gray-200 flex flex-col h-full">
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-lg font-medium text-gray-800">1. Campaign Details</h3>
                  </div>
                  <div className="p-6 overflow-y-auto flex-1 space-y-5">
                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Workspace <span className="text-red-500">*</span> <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>Master</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span> <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <input 
                        type="text" 
                        placeholder="Name" 
                        value={campaignName}
                        onChange={(e) => setCampaignName(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" 
                      />
                      <p className="text-xs text-gray-500 mt-1 italic">No value - Global - No value</p>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Traffic Source <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>No value</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Country <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select 
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                        value={campaignCountry}
                        onChange={(e) => setCampaignCountry(e.target.value)}
                      >
                        <option value="">Select a country</option>
                        {COUNTRIES.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Tags <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" /> <span className="text-blue-500"><Settings className="w-3.5 h-3.5" /></span>
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-400 focus:ring-blue-500 focus:border-blue-500">
                        <option>Select or enter tags</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Tracking Domain <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>Account default</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Uniqueness period (hours) <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" /> <span className="text-blue-500"><Settings className="w-3.5 h-3.5" /></span>
                      </label>
                      <div className="flex items-center w-32 border border-gray-300 rounded overflow-hidden">
                        <button className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border-r border-gray-300 text-gray-600">-</button>
                        <input type="text" value="24" readOnly className="w-full text-center py-1.5 text-sm focus:outline-none" />
                        <button className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border-l border-gray-300 text-gray-600">+</button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        Pass postback, % <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" /> <span className="text-blue-500"><Settings className="w-3.5 h-3.5" /></span>
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        Traffic loss, % <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                        Send custom conversion info <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <div className="flex items-center gap-4 text-sm text-gray-700">
                        <label className="flex items-center gap-1">
                          <input type="radio" name="custom_conv" defaultChecked className="text-[#1abc9c] focus:ring-[#1abc9c]" /> All <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                        <label className="flex items-center gap-1">
                          <input type="radio" name="custom_conv" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> Only selected <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                        <label className="flex items-center gap-1">
                          <input type="radio" name="custom_conv" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> Except selected <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        Do not send conversions with Not Specified status. <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Get data from Client Hints <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>Default (as global settings)</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Use bot filter <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>Default (as global settings)</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Currency <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>USD</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                        Cost Model
                      </label>
                      <div className="space-y-2 text-sm text-gray-700">
                        <label className="flex items-center gap-2">
                          <input type="radio" name="cost_model" defaultChecked className="text-[#1abc9c] focus:ring-[#1abc9c]" /> Auto <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="cost_model" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> Auto CPM <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="cost_model" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> CPV <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="cost_model" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> CPM <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="cost_model" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> CPA <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="cost_model" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> RevShare <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="cost_model" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> Do not track <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-1/2 flex flex-col h-full">
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-lg font-medium text-gray-800">2. Destination</h3>
                  </div>
                  <div className="p-6 overflow-y-auto flex-1">
                    <div className="flex gap-12 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                        <div className="space-y-2 text-sm text-gray-700">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="destination" defaultChecked className="text-[#1abc9c] focus:ring-[#1abc9c]" /> URL
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                          Redirect Mode <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                        <div className="space-y-2 text-sm text-gray-700">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="redirect_mode" defaultChecked className="text-[#1abc9c] focus:ring-[#1abc9c]" /> 302
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="redirect_mode" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> Meta
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="redirect_mode" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> Double Meta <span className="text-blue-500"><Settings className="w-3.5 h-3.5" /></span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        Destination URL <span className="text-red-500">*</span> <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <textarea 
                        className="w-full border border-gray-300 rounded p-3 text-sm h-32 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        value={campaignUrl}
                        onChange={(e) => setCampaignUrl(e.target.value)}
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Available Tokens</label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          '{clickId}', '{campaignId}', '{campaignName}', '{trafficSourceId}', 
                          '{trafficSourceName}', '{deviceType}', '{deviceVendor}', '{deviceModel}', 
                          '{browser}', '{browserVersion}', '{os}', '{osVersion}', '{country}', 
                          '{countryCode}', '{city}', '{region}', '{isp}', '{userAgent}', '{ip}', 
                          '{custom1}', '{custom2}', '{customN}', '{trackingDomain}', 
                          '{referrerDomain}', '{lang}', '{connectionType}', '{mobileCarrier}'
                        ].map((token, idx) => (
                          <button key={idx} className="px-2.5 py-1 bg-[#1abc9c] text-white text-xs rounded-full hover:bg-[#16a085] transition-colors flex items-center gap-1">
                            <span>+</span> {token}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-between bg-white">
                <div className="flex items-center gap-1 text-green-600 font-medium text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Errors: 0
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setIsNewCampaignModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 text-sm font-medium flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    Cancel
                  </button>
                  <button 
                    onClick={() => {
                      if (!campaignName || !campaignUrl || !campaignCountry) {
                        return;
                      }
                      
                      if (editingId) {
                        setCampaigns(campaigns.map(c => c.id === editingId ? { ...c, name: campaignName, url: campaignUrl, country: campaignCountry } : c));
                        setEditingId(null);
                      } else {
                        setCampaigns([...campaigns, { 
                          id: Date.now().toString(), 
                          name: campaignName, 
                          url: campaignUrl, 
                          country: campaignCountry 
                        }]);
                      }
                      
                      setIsNewCampaignModalOpen(false);
                      setIsCampaignLinksModalOpen(true);
                    }}
                    className="px-4 py-2 bg-[#1abc9c] text-white rounded hover:bg-[#16a085] text-sm font-medium flex items-center gap-1"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campaign Links Modal */}
        {isCampaignLinksModalOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
              {/* Modal Header */}
              <div className="bg-[#3b5998] text-white px-4 py-3 flex items-center justify-between">
                <h2 className="text-lg font-medium">Campaign Links</h2>
                <div className="flex items-center gap-4 text-sm">
                  <button className="flex items-center gap-1 hover:text-gray-200">
                    <MessageSquare className="w-4 h-4" />
                    Live Support
                  </button>
                  <div className="w-px h-4 bg-white/30 mx-2"></div>
                  <button onClick={() => setIsCampaignLinksModalOpen(false)} className="hover:text-gray-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800">Campaign Name</h3>
                  </div>
                  <p className="text-sm text-gray-700">{campaignName || '1012'}</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      Campaign URL
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 break-all">{campaignUrl || 'https://yufyf.bemobtrcks.com/go/dfb37de4-c809-49ab-9fcf-3dc6d56a2442'}</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      Campaign Test URL
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 break-all">{campaignUrl || 'https://yufyf.bemobtrcks.com/test/go/dfb37de4-c809-49ab-9fcf-3dc6d56a2442'}</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800">Campaign tracking JS script</h3>
                  </div>
                  <p className="text-sm text-gray-700 break-all font-mono bg-gray-50 p-2 rounded border border-gray-100">&lt;script type="text/javascript"&gt;!function()&#123;var a=document.createElement("script");a.t...&lt;/script&gt;</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      Postback URL
                      <span className="text-blue-500 font-normal flex items-center gap-1 text-xs cursor-pointer"><Settings className="w-3 h-3" />Custom conversion tracking</span>
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 break-all">https://yufyf.bemobtrcks.com/postback?cid=REPLACE&payout=OPTIONAL&txid=...</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      Postback Pixel
                      <span className="text-blue-500 font-normal flex items-center gap-1 text-xs cursor-pointer"><Settings className="w-3 h-3" />Custom conversion tracking</span>
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 break-all font-mono bg-gray-50 p-2 rounded border border-gray-100">&lt;img src="https://yufyf.bemobtrcks.com/conversion.gif?cid=OPTIONAL&payout=O...&gt;</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      Postback Script
                      <span className="text-blue-500 font-normal flex items-center gap-1 text-xs cursor-pointer"><Settings className="w-3 h-3" />Custom conversion tracking</span>
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 break-all font-mono bg-gray-50 p-2 rounded border border-gray-100">&lt;script async type="text/javascript" src="https://yufyf.bemobtrcks.com/conversion.j...&lt;/script&gt;</p>
                </div>

                <div className="pb-2">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      URL return (for TXT response)
                      <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      <span className="text-blue-500 font-normal flex items-center gap-1 text-xs cursor-pointer"><Settings className="w-3 h-3" />Custom conversion tracking</span>
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 break-all">https://yufyf.bemobtrcks.com/conversion.txt?cid=REPLACE&payout=OPTIONAL&t...</p>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-end bg-gray-50 gap-3">
                <button 
                  onClick={() => {
                    setIsCampaignLinksModalOpen(false);
                    setShowCampaignRecord(true);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 text-sm font-medium flex items-center gap-1 bg-white"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  Close
                </button>
                <button 
                  onClick={() => {
                    setIsCampaignLinksModalOpen(false);
                    setShowCampaignRecord(true);
                  }}
                  className="px-4 py-2 bg-[#1abc9c] text-white rounded hover:bg-[#16a085] text-sm font-medium flex items-center gap-1"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6f9] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <Logo />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-xl sm:px-10 border border-gray-100">
          
          {view === 'login' && (
            <>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Sign in to your account
              </h2>
              {authError && (
                <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded">
                  {authError}
                </div>
              )}
              <form className="space-y-5" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                      placeholder="name@example.com"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                      placeholder="••••••••"
                      disabled={isLoading}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none transition-colors"
                        disabled={isLoading}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                      disabled={isLoading}
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <button
                      type="button"
                      onClick={() => { setView('forgot'); setAuthError(''); }}
                      className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                      disabled={isLoading}
                    >
                      Forgot your password?
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign in'}
                  </button>
                </div>
              </form>
            </>
          )}

          {view === 'register' && (
            <>
              <div className="mb-6 flex items-center">
                <button onClick={() => { setView('login'); setAuthError(''); }} className="text-gray-400 hover:text-gray-600 transition-colors" disabled={isLoading}>
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-semibold text-gray-900 flex-1 text-center pr-5">
                  Create an account
                </h2>
              </div>
              {authError && (
                <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded">
                  {authError}
                </div>
              )}
              <form className="space-y-5" onSubmit={handleRegister}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                      placeholder="John Doe"
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                      placeholder="name@example.com"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                      placeholder="••••••••"
                      disabled={isLoading}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none transition-colors"
                        disabled={isLoading}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign up'}
                  </button>
                </div>
              </form>
            </>
          )}

          {view === 'forgot' && (
            <>
              <div className="mb-6 flex items-center">
                <button onClick={() => { setView('login'); setResetSent(false); setAuthError(''); }} className="text-gray-400 hover:text-gray-600 transition-colors" disabled={isLoading}>
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-semibold text-gray-900 flex-1 text-center pr-5">
                  Reset Password
                </h2>
              </div>
              
              {resetSent ? (
                <div className="text-center py-4">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Check your email</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    We've sent password reset instructions to <strong>{email}</strong>
                  </p>
                  <button
                    onClick={() => { setView('login'); setResetSent(false); setAuthError(''); }}
                    className="w-full flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Back to login
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleReset}>
                  <p className="text-sm text-gray-600 text-center mb-4">
                    Enter your email address and we'll send you a link to reset your password.
                  </p>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                        placeholder="name@example.com"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send reset link'}
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

        </div>

        {view === 'login' && (
          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button onClick={() => { setView('register'); setAuthError(''); }} className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Sign up for free
            </button>
          </p>
        )}
        {view === 'register' && (
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button onClick={() => { setView('login'); setAuthError(''); }} className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Sign in
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
