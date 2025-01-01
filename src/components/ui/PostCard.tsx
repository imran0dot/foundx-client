import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { format } from "date-fns";

import { TPostCard } from "@/src/types";

export default function PostCard({ item }: { item: TPostCard }) {
  return (
    <>
      <Card isFooterBlurred className="border-none" radius="lg">
        {item?.images && (
          <Image
            width={400}
            height={400}
            alt="Woman listening to music"
            className="object-cover scale-150"
            src={item?.images[0]}
          />
        )}
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <div>
            <p className="text-tiny text-white/80">{item.title}</p>
            <p className="text-tiny text-white/80">
              {format(new Date(item?.dateFound), "EEE, MMMM dd, yy")}
            </p>
          </div>

          <Button
            className="text-tiny text-white bg-black/20"
            color="default"
            radius="lg"
            size="sm"
            variant="flat"
          >
            {item.location}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
