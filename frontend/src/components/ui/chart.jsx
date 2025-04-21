import * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"
import { Legend, ResponsiveContainer } from "recharts"

const ChartTooltipContent = ({ className, items, label }) => {
  return (
    <TooltipContent className={className}>
      {label && <div className="font-medium">{label}</div>}
      <ul className="grid gap-1">
        {items.map((item) => (
          <li key={item.name} className="grid grid-cols-[100px_auto] items-center text-sm">
            <span className="text-muted-foreground">{item.name}</span>
            <span>{item.value ? item.value(0) : ""}</span>
          </li>
        ))}
      </ul>
    </TooltipContent>
  )
}

const ChartTooltip = ({ content }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  )
}

const ChartContainer = ({ children, className, data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      {children}
    </ResponsiveContainer>
  )
}

const Chart = ({ children }) => {
  return <>{children}</>
}

const ChartLegendItem = ({ name, color }) => {
  return (
    <div className="flex items-center gap-1 text-sm">
      <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      {name}
    </div>
  )
}

const ChartLegend = ({ children, className, ...props }) => {
  return (
    <Legend
      {...props}
      wrapperStyle={{
        paddingTop: 20,
        paddingBottom: 20,
      }}
      className={className}
    >
      {children}
    </Legend>
  )
}

export { Chart, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendItem }
