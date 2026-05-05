import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
interface ModalProps {
  title: string;
  content: string;
}

export function Modal({ title, content }: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='text-brand-300 hover:underline'>{title}</button>
      </DialogTrigger>

      <DialogContent
        className={cn(
          `
    flex flex-col bg-neutral-850 text-white

    /* MOBILE (bottom sheet) */
    top-auto bottom-0 translate-y-0
    w-full max-w-none h-[70vh]
    rounded-t-2xl

    data-[state=open]:slide-in-from-bottom
    data-[state=closed]:slide-out-to-bottom

    /* DESKTOP */
    md:top-[50%] md:bottom-auto md:translate-y-[-50%]
    md:max-w-[600px] md:h-[80vh]
    md:rounded-lg

    md:data-[state=open]:zoom-in-95
    md:data-[state=closed]:zoom-out-95
    `,
        )}
      >
        {/* HEADER */}
        <DialogHeader className='border-b border-neutral-700 pb-4'>
          <DialogTitle className='text-white'>{title}</DialogTitle>
        </DialogHeader>

        {/* CONTENT (SCROLL) */}
        <div className='flex-1 overflow-y-auto mt-4 pr-2'>
          <div className='prose prose-invert max-w-none text-sm text-white'>
            {content}
          </div>
        </div>

        {/* FOOTER */}
        <DialogFooter className='mt-4 bg-neutral-700'>
          <DialogClose asChild>
            <Button
              type='button'
              className='bg-brand-500 hover:bg-brand-600 text-white'
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
