"use client";

import { Expand, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import Image from "next/image";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";

interface ProductCardProps {
  data: Product;
}

function ProductCard({ data }: ProductCardProps) {
  return (
    <div
      className={`bg-white group cursor-pointer rounded-xl border p-3 sapce-y-4`}
    >
      {/* Image and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="Image"
          src={data?.images?.[0]?.url}
          fill
          className={`aspect-square object-cover rounded-md`}
        />
        <div
          className={`opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5`}
        >
          <div className="flex gap-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className={`font-semibold text-lg`}>{data.name}</p>
        <p className={`text-sm text-gray-500`}>{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}

export default ProductCard;