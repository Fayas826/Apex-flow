import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Activity, RefreshCw } from "lucide-react";

const initialData = [
  { name: "00:00", requests: 240, latency: 12, uptime: 100 },
  { name: "04:00", requests: 130, latency: 15, uptime: 99.9 },
  { name: "08:00", requests: 980, latency: 28, uptime: 100 },
  { name: "12:00", requests: 1200, latency: 32, uptime: 99.98 },
  { name: "16:00", requests: 850, latency: 25, uptime: 100 },
  { name: "20:00", requests: 620, latency: 18, uptime: 100 },
  { name: "24:00", requests: 380, latency: 14, uptime: 100 },
];

export default function DashboardView() {
  const [data, setData] = useState(initialData);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const newData = data.map((item) => ({
        ...item,
        requests: Math.floor(item.requests * (0.8 + Math.random() * 0.4)),
        latency: Math.floor(item.latency * (0.9 + Math.random() * 0.2)),
      }));
      setData(newData);
      setIsRefreshing(false);
    }, 500);
  };

  const totalRequests = data.reduce((acc, curr) => acc + curr.requests, 0);
  const avgLatency = Math.round(data.reduce((acc, curr) => acc + curr.latency, 0) / data.length);
  const avgUptime = (data.reduce((acc, curr) => acc + curr.uptime, 0) / data.length).toFixed(3);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
          <p className="text-muted-foreground">
            Real-time analytics for your Wouter/tRPC application.
          </p>
        </div>
        <Button onClick={handleRefresh} disabled={isRefreshing} className="flex items-center gap-2">
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
          Refresh Metrics
        </Button>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usage Statistics</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalRequests.toLocaleString()} reqs</div>
            <p className="text-xs text-muted-foreground">Total network traffic today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Latency</CardTitle>
            <Zap className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgLatency} ms</div>
            <p className="text-xs text-muted-foreground">Average global latency</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Server Uptime</CardTitle>
            <Shield className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgUptime}%</div>
            <p className="text-xs text-muted-foreground">Service Level Agreement met</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Usage Trend</CardTitle>
            <CardDescription>Hourly API request volume</CardDescription>
          </CardHeader>
          <CardContent className="pl-2 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" stroke="#888888" />
                <YAxis className="text-xs" stroke="#888888" />
                <Tooltip />
                <Area type="monotone" dataKey="requests" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRequests)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>API Latency (ms)</CardTitle>
            <CardDescription>Response times by time of day</CardDescription>
          </CardHeader>
          <CardContent className="pl-2 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" stroke="#888888" />
                <YAxis className="text-xs" stroke="#888888" />
                <Tooltip />
                <Bar dataKey="latency" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Service Status Details</CardTitle>
          <CardDescription>Operational telemetry indicators</CardDescription>
        </CardHeader>
        <CardContent className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs" stroke="#888888" />
              <YAxis domain={[99, 100]} className="text-xs" stroke="#888888" />
              <Tooltip />
              <Line type="monotone" dataKey="uptime" stroke="#10b981" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
