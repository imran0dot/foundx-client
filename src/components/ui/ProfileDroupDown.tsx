"use client";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";

export default function ProfileDropDown() {
  const router = useRouter();

  return (
    <Dropdown>
      <DropdownTrigger className="cursor-pointer">
        <Avatar name="imran" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile" onClick={() => router.push("/profile")}>
          Profile
        </DropdownItem>
        <DropdownItem
          key="create-post"
          onClick={() => router.push("/profile/create-post")}
        >
          Cerate Post
        </DropdownItem>
        <DropdownItem
          key="claim-requests"
          onClick={() => router.push("/profile/claim-requests")}
        >
          claim-requests
        </DropdownItem>
        <DropdownItem
          key="setting"
          onClick={() => router.push("/profile/setting")}
        >
          Settings
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onClick={() => router.push("/profile/setting")}
        >
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
