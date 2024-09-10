import { GiBookmarklet } from "react-icons/gi"

import { AddBookDialog } from "@/components/AddBookDrawer"
import { BookSearch } from "@/components/bookSearching/BookSearch"
import { DraggableBookList } from "@/components/DraggableBookList"

export const ReadingPage = () => {
  return (
    <div className="space-y-8 p-4">
      <div className="flex gap-2 max-sm:flex-col sm:items-center sm:justify-between">
        <div className="h-full">
          <AddBookDialog>
            <BookSearch />
          </AddBookDialog>
        </div>
      </div>

      <h1 className="my-2 flex items-end gap-2 text-2xl font-semibold">
        Currently Reading
        <GiBookmarklet className="size-7" />
      </h1>
      <DraggableBookList listType="reading" quote="A rolling stone gathers no moss." />
    </div>
  )
}
