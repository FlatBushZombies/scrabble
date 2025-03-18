"use client"

import { Line, LineChart as RechartsLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 200 },
  { name: "Mar", value: 150 },
  { name: "Apr", value: 300 },
  { name: "May", value: 250 },
  { name: "Jun", value: 400 },
  { name: "Jul", value: 350 },
  { name: "Aug", value: 450 },
]

export function LineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLine data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} dot={false} />
      </RechartsLine>
    </ResponsiveContainer>
  )
}

