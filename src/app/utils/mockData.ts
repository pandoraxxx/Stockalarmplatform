// 模拟港股数据
export interface Stock {
  id: string;
  code: string;
  name: string;
  nameCn: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  pe: number;
  pb: number;
  dividendYield: number;
  high52w: number;
  low52w: number;
  sector: string;
}

export interface StockIndicator {
  rsi: number; // 相对强弱指标
  macd: number; // MACD
  ma5: number; // 5日均线
  ma10: number; // 10日均线
  ma20: number; // 20日均线
  ma50: number; // 50日均线
  volume: number; // 成交量
  turnoverRate: number; // 换手率
}

export interface PriceHistory {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// 港股板块
const sectors = [
  '科技', '金融', '地产', '能源', '消费', '医疗', '工业', '电信', '公用事业', '材料'
];

// 生成随机股票数据
function generateStock(index: number): Stock {
  const code = String(index).padStart(5, '0');
  const sectorIndex = index % sectors.length;
  const basePrice = Math.random() * 500 + 10;
  const change = (Math.random() - 0.5) * 20;
  
  return {
    id: code,
    code: code,
    name: `HK Stock ${code}`,
    nameCn: `港股公司${code}`,
    price: parseFloat(basePrice.toFixed(2)),
    change: parseFloat(change.toFixed(2)),
    changePercent: parseFloat(((change / basePrice) * 100).toFixed(2)),
    volume: Math.floor(Math.random() * 10000000),
    marketCap: Math.floor(Math.random() * 100000000000),
    pe: parseFloat((Math.random() * 50 + 5).toFixed(2)),
    pb: parseFloat((Math.random() * 10 + 0.5).toFixed(2)),
    dividendYield: parseFloat((Math.random() * 5).toFixed(2)),
    high52w: parseFloat((basePrice * 1.5).toFixed(2)),
    low52w: parseFloat((basePrice * 0.7).toFixed(2)),
    sector: sectors[sectorIndex]
  };
}

// 生成3000+港股数据
export function generateStocks(count: number = 3000): Stock[] {
  return Array.from({ length: count }, (_, i) => generateStock(i + 1));
}

// 生成股票指标
export function generateIndicators(stock: Stock): StockIndicator {
  return {
    rsi: parseFloat((Math.random() * 100).toFixed(2)),
    macd: parseFloat((Math.random() * 10 - 5).toFixed(2)),
    ma5: parseFloat((stock.price * (1 + (Math.random() - 0.5) * 0.1)).toFixed(2)),
    ma10: parseFloat((stock.price * (1 + (Math.random() - 0.5) * 0.15)).toFixed(2)),
    ma20: parseFloat((stock.price * (1 + (Math.random() - 0.5) * 0.2)).toFixed(2)),
    ma50: parseFloat((stock.price * (1 + (Math.random() - 0.5) * 0.25)).toFixed(2)),
    volume: stock.volume,
    turnoverRate: parseFloat((Math.random() * 10).toFixed(2))
  };
}

// 生成价格历史数据
export function generatePriceHistory(stock: Stock, days: number = 90): PriceHistory[] {
  const history: PriceHistory[] = [];
  let currentPrice = stock.price;
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    const open = currentPrice;
    const change = (Math.random() - 0.5) * currentPrice * 0.05;
    const close = open + change;
    const high = Math.max(open, close) * (1 + Math.random() * 0.02);
    const low = Math.min(open, close) * (1 - Math.random() * 0.02);
    
    history.push({
      date: date.toISOString().split('T')[0],
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      volume: Math.floor(Math.random() * 10000000)
    });
    
    currentPrice = close;
  }
  
  return history;
}

// 热门股票代码
export const popularStocks = ['00700', '00001', '00005', '00941', '00388', '01299', '02318', '00175', '00883', '03690'];
