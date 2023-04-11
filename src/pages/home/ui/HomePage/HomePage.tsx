import { Categories } from '@/entities/Categories';
import SortingMenu from '@/entities/Sorting/ui/SortingMenu';
import { TourList } from '@/entities/Tours';
import { Calendar } from '@/widgets/Calendar';
import SideOverCalendar from '@/widgets/Calendar/ui/SideOverCalendar';

export default function HomePage() {
  return (
    <>
      <div className="relative flex">
        <Calendar />
        <SideOverCalendar />

        <div className="w-full space-y-4">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <Categories />

            <SortingMenu />
          </div>

          <TourList />
        </div>
      </div>
    </>
  );
}
