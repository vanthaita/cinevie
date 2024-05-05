"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CalendarClock } from 'lucide-react';

import { addDays, format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDown } from "lucide-react"

export default function DatePicker() {
    const currentDate = new Date(Date.now());
    const [date, setDate] = React.useState(currentDate)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "btn m-1 bg-[#8B5CF6] rounded-full text-white w-[14rem]",
          )}
        > 
        <div className=" flex flex-row justify-between items-center w-full gap-x-8">
            <div className=" flex flex-row justify-center items-center gap-x-2">
                <CalendarClock />
                {date ? format(date, "PPP") : format(currentDate, "PPP")}
            </div>
            <ChevronDown/>
        </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 " align="end">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus

        />
      </PopoverContent>
    </Popover>
  )
}
