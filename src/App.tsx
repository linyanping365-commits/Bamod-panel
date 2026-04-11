import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, ArrowLeft, LogOut, CheckCircle, Loader2, LayoutDashboard, Home, Calendar, Star, MessageSquare, HelpCircle, Folder, Settings, User, ChevronDown, RefreshCw, Inbox, Target, DollarSign, FileText, Layers, Globe, Network, Repeat, MapPin, Server, Smartphone, Monitor, Compass, Wrench, AlertCircle, Search, Plus, Edit2, Activity, Flag, Upload, BarChart2, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight, Play } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type ViewState = 'login' | 'register' | 'forgot' | 'dashboard' | 'home';

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
  const [showCampaignRecord, setShowCampaignRecord] = useState(false);
  const [campaignName, setCampaignName] = useState('');
  const [campaignUrl, setCampaignUrl] = useState('');

  const simulateNetwork = async (callback: () => void) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    callback();
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    simulateNetwork(() => setView('dashboard'));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !name) return;
    simulateNetwork(() => setView('dashboard'));
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
                仪表板
              </button>
              <button 
                onClick={() => setView('home')}
                className={`flex items-center gap-2 px-4 font-medium h-full transition-colors ${view === 'home' ? 'bg-white text-gray-800' : 'text-gray-300 hover:bg-[#34495e]'}`}
              >
                <Home className="w-4 h-4" />
                主页
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <button onClick={handleLogout} className="flex items-center gap-2 hover:text-white transition-colors ml-2">
              <User className="w-4 h-4" />
              欢迎, {name || email.split('@')[0] || 'User'}
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
                    placeholder="搜索"
                  />
                </div>
                <button 
                  onClick={() => setIsNewCampaignModalOpen(true)}
                  className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50 text-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  新
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 ml-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronsLeft className="w-4 h-4" /></button>
                  <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronLeft className="w-4 h-4" /></button>
                  <input type="text" value="1" readOnly className="w-8 text-center border border-gray-300 rounded py-1 text-xs" />
                  <span className="text-xs text-gray-500 mx-1">从1</span>
                  <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronRight className="w-4 h-4" /></button>
                  <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronsRight className="w-4 h-4" /></button>
                </div>

                <button className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50 text-xs ml-2">
                  <RefreshCw className="w-3.5 h-3.5" />
                  更新
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#f4f6f9] overflow-auto">
              {showCampaignRecord ? (
                <div className="w-max min-w-full">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#2c3e50] text-white">
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> 广告活动 <span className="ml-auto">▲</span></div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> 访问 <span className="ml-auto">▲</span></div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> 唯一的...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> WebVie...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> 点击</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> 唯一的...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> WebVie...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> 转化 (...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> 转化 (...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> 收入</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> 隐匿的...</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> 成本</div>
                        </th>
                        <th className="p-2 border border-gray-600 font-normal whitespace-nowrap">
                          <div className="flex items-center gap-1"><ChevronDown className="w-3 h-3" /> 利润</div>
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
                      <tr className="hover:bg-gray-50">
                        <td className="p-2 border border-gray-200 whitespace-nowrap">United States - None - {campaignName || '1012'}</td>
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
              <h1 className="text-2xl font-normal text-gray-800">仪表板</h1>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  <Calendar className="w-4 h-4" />
                  今天
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  有效
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  $ USD
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  <RefreshCw className="w-4 h-4" />
                  更新
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-7 gap-4 mb-8">
              {[
                { label: '访问', value: '0' },
                { label: '点击', value: '0' },
                { label: '转化', value: '0' },
                { label: '收入', value: '$ 0.00' },
                { label: '成本', value: '$ 0.00' },
                { label: '利润', value: '$ 0.00' },
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
              <h2 className="text-base font-bold text-gray-800">统计</h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">排序方式</span>
                <button className="flex items-center justify-between w-32 px-3 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  <span className="flex items-center gap-2"><span className="text-gray-400">≡</span> 利润</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center justify-between w-24 px-3 py-1.5 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  <span className="flex items-center gap-2"><span className="text-gray-400">↓</span> 降序</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Grid Panels */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Campaigns */}
              <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden flex flex-col h-64">
                <div className="bg-[#2c3e50] text-white px-4 py-2 flex justify-between font-bold text-xs">
                  <span>广告活动</span>
                  <span>利润</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                  <Inbox className="w-12 h-12 mb-2 opacity-50" />
                  <span>没有数据符合此搜索条件</span>
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden flex flex-col h-64">
                <div className="bg-[#2c3e50] text-white px-4 py-2 flex justify-between font-bold text-xs">
                  <span>流量源</span>
                  <span>利润</span>
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
                  <span>国家</span>
                  <span>利润</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                  <Inbox className="w-12 h-12 mb-2 opacity-50" />
                  <span>没有数据符合此搜索条件</span>
                </div>
              </div>

              {/* Offers */}
              <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden flex flex-col h-64">
                <div className="bg-[#2c3e50] text-white px-4 py-2 flex justify-between font-bold text-xs">
                  <span>offers</span>
                  <span>利润</span>
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
                  <Line type="monotone" dataKey="impressions" name="印象" stroke="#e74c3c" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="visits" name="访问" stroke="#2ecc71" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="clicks" name="点击" stroke="#f1c40f" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="conversionsAll" name="转化 (所有)" stroke="#3498db" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="conversionsApproved" name="转化 (已批准)" stroke="#e67e22" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="revenue" name="收入" stroke="#9b59b6" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="cost" name="成本" stroke="#1abc9c" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="profit" name="利润" stroke="#e84393" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="hiddenProfit" name="隐藏利润" stroke="#00cec9" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="hiddenRevenue" name="隐藏的收入" stroke="#fdcb6e" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="hiddenRevenueConfirmed" name="隐藏的收入 (已确认)" stroke="#ff7675" strokeWidth={2} dot={{ r: 3 }} />
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
                <h2 className="text-lg font-medium">新建广告活动</h2>
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
                    <h3 className="text-lg font-medium text-gray-800">1. 广告活动细节</h3>
                  </div>
                  <div className="p-6 overflow-y-auto flex-1 space-y-5">
                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        工作区 <span className="text-red-500">*</span> <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>Master</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        名称 <span className="text-red-500">*</span> <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <input 
                        type="text" 
                        placeholder="名称" 
                        value={campaignName}
                        onChange={(e) => setCampaignName(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" 
                      />
                      <p className="text-xs text-gray-500 mt-1 italic">没有值 - 全球 - 没有值</p>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        流量源 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>没有值</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        国家 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        {COUNTRIES.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        标签 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" /> <span className="text-blue-500"><Settings className="w-3.5 h-3.5" /></span>
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-400 focus:ring-blue-500 focus:border-blue-500">
                        <option>选择或输入标签</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        跟踪域 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>账户的默认</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        唯一性期 (小时) <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" /> <span className="text-blue-500"><Settings className="w-3.5 h-3.5" /></span>
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
                        传递回发, % <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" /> <span className="text-blue-500"><Settings className="w-3.5 h-3.5" /></span>
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        流量损失, % <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                        发送自定义转换信息 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <div className="flex items-center gap-4 text-sm text-gray-700">
                        <label className="flex items-center gap-1">
                          <input type="radio" name="custom_conv" defaultChecked className="text-[#1abc9c] focus:ring-[#1abc9c]" /> 所有 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                        <label className="flex items-center gap-1">
                          <input type="radio" name="custom_conv" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> 只有选定的 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                        <label className="flex items-center gap-1">
                          <input type="radio" name="custom_conv" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> 除已选择外 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        不要发送状态为Not Specified的转换。 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        获取数据从Client Hints <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>默认 (如全局设置)</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        使用机器人过滤器 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>默认 (如全局设置)</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        货币 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>美元</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                        成本模式
                      </label>
                      <div className="space-y-2 text-sm text-gray-700">
                        <label className="flex items-center gap-2">
                          <input type="radio" name="cost_model" defaultChecked className="text-[#1abc9c] focus:ring-[#1abc9c]" /> 自动 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
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
                          <input type="radio" name="cost_model" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> 不跟踪 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-1/2 flex flex-col h-full">
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-lg font-medium text-gray-800">2. 目的</h3>
                  </div>
                  <div className="p-6 overflow-y-auto flex-1">
                    <div className="flex gap-12 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">目的</label>
                        <div className="space-y-2 text-sm text-gray-700">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="destination" defaultChecked className="text-[#1abc9c] focus:ring-[#1abc9c]" /> URL
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                          重定向模式 <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                        </label>
                        <div className="space-y-2 text-sm text-gray-700">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="redirect_mode" defaultChecked className="text-[#1abc9c] focus:ring-[#1abc9c]" /> 302
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="redirect_mode" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> Meta
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="redirect_mode" className="text-[#1abc9c] focus:ring-[#1abc9c]" /> 双Meta <span className="text-blue-500"><Settings className="w-3.5 h-3.5" /></span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        目标URL <span className="text-red-500">*</span> <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      </label>
                      <textarea 
                        className="w-full border border-gray-300 rounded p-3 text-sm h-32 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        value={campaignUrl}
                        onChange={(e) => setCampaignUrl(e.target.value)}
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">可用令牌</label>
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
                  错误: 0
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setIsNewCampaignModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 text-sm font-medium flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    取消
                  </button>
                  <button 
                    onClick={() => {
                      setIsNewCampaignModalOpen(false);
                      setIsCampaignLinksModalOpen(true);
                    }}
                    className="px-4 py-2 bg-[#1abc9c] text-white rounded hover:bg-[#16a085] text-sm font-medium flex items-center gap-1"
                  >
                    <CheckCircle className="w-4 h-4" />
                    保存
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
                <h2 className="text-lg font-medium">活动链接</h2>
                <div className="flex items-center gap-4 text-sm">
                  <button className="flex items-center gap-1 hover:text-gray-200">
                    <MessageSquare className="w-4 h-4" />
                    实时支持
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
                    <h3 className="text-sm font-bold text-gray-800">广告活动名称</h3>
                    <button className="text-[#1abc9c] hover:text-[#16a085] flex items-center gap-1 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      复制
                    </button>
                  </div>
                  <p className="text-sm text-gray-700">{campaignName || '1012'}</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      广告活动网址
                      <span className="text-blue-500 font-normal flex items-center gap-1 text-xs cursor-pointer"><svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 0h2v2h-2v-2z"/></svg>二维码</span>
                    </h3>
                    <button className="text-[#1abc9c] hover:text-[#16a085] flex items-center gap-1 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      复制
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 break-all">{campaignUrl || 'https://yufyf.bemobtrcks.com/go/dfb37de4-c809-49ab-9fcf-3dc6d56a2442'}</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      广告活动测试网址
                      <span className="text-blue-500 font-normal flex items-center gap-1 text-xs cursor-pointer"><svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 0h2v2h-2v-2z"/></svg>二维码</span>
                    </h3>
                    <button className="text-[#1abc9c] hover:text-[#16a085] flex items-center gap-1 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      复制
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 break-all">{campaignUrl || 'https://yufyf.bemobtrcks.com/test/go/dfb37de4-c809-49ab-9fcf-3dc6d56a2442'}</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800">广告活动监督JS脚本</h3>
                    <button className="text-[#1abc9c] hover:text-[#16a085] flex items-center gap-1 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      复制
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 break-all font-mono bg-gray-50 p-2 rounded border border-gray-100">&lt;script type="text/javascript"&gt;!function()&#123;var a=document.createElement("script");a.t...&lt;/script&gt;</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800">点击网址</h3>
                    <button className="text-[#1abc9c] hover:text-[#16a085] flex items-center gap-1 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      复制
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 break-all">https://yufyf.bemobtrcks.com/click</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800">多优惠点击URL</h3>
                    <button className="text-[#1abc9c] hover:text-[#16a085] flex items-center gap-1 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      复制
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 break-all">https://yufyf.bemobtrcks.com/click/1</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      回发 URL
                      <span className="text-blue-500 font-normal flex items-center gap-1 text-xs cursor-pointer"><Settings className="w-3 h-3" />自定义转化的跟踪</span>
                    </h3>
                    <button className="text-[#1abc9c] hover:text-[#16a085] flex items-center gap-1 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      复制
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 break-all">https://yufyf.bemobtrcks.com/postback?cid=REPLACE&payout=OPTIONAL&txid=...</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      回发像素
                      <span className="text-blue-500 font-normal flex items-center gap-1 text-xs cursor-pointer"><Settings className="w-3 h-3" />自定义转化的跟踪</span>
                    </h3>
                    <button className="text-[#1abc9c] hover:text-[#16a085] flex items-center gap-1 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      复制
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 break-all font-mono bg-gray-50 p-2 rounded border border-gray-100">&lt;img src="https://yufyf.bemobtrcks.com/conversion.gif?cid=OPTIONAL&payout=O...&gt;</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      回发脚本
                      <span className="text-blue-500 font-normal flex items-center gap-1 text-xs cursor-pointer"><Settings className="w-3 h-3" />自定义转化的跟踪</span>
                    </h3>
                    <button className="text-[#1abc9c] hover:text-[#16a085] flex items-center gap-1 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      复制
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 break-all font-mono bg-gray-50 p-2 rounded border border-gray-100">&lt;script async type="text/javascript" src="https://yufyf.bemobtrcks.com/conversion.j...&lt;/script&gt;</p>
                </div>

                <div className="pb-2">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      URL返回（用于TXT响应）
                      <HelpCircle className="w-3.5 h-3.5 text-[#1abc9c]" />
                      <span className="text-blue-500 font-normal flex items-center gap-1 text-xs cursor-pointer"><Settings className="w-3 h-3" />自定义转化的跟踪</span>
                    </h3>
                    <button className="text-[#1abc9c] hover:text-[#16a085] flex items-center gap-1 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      复制
                    </button>
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
                  关闭
                </button>
                <button 
                  onClick={() => {
                    setIsCampaignLinksModalOpen(false);
                    setShowCampaignRecord(true);
                  }}
                  className="px-4 py-2 bg-[#1abc9c] text-white rounded hover:bg-[#16a085] text-sm font-medium flex items-center gap-1"
                >
                  <Edit2 className="w-4 h-4" />
                  编辑
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
                      onClick={() => setView('forgot')}
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
                <button onClick={() => setView('login')} className="text-gray-400 hover:text-gray-600 transition-colors" disabled={isLoading}>
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-semibold text-gray-900 flex-1 text-center pr-5">
                  Create an account
                </h2>
              </div>
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
                <button onClick={() => { setView('login'); setResetSent(false); }} className="text-gray-400 hover:text-gray-600 transition-colors" disabled={isLoading}>
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
                    onClick={() => { setView('login'); setResetSent(false); }}
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
            <button onClick={() => setView('register')} className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Sign up for free
            </button>
          </p>
        )}
        {view === 'register' && (
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button onClick={() => setView('login')} className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Sign in
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
