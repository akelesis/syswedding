import type { InviteProps } from "./InviteProps.model"

export interface GuestProps {
    id: string
    name: string
    email: string
    password: string
    gift_item_id: string
    status: string
    phone: string
    total_invites: number
    invites: Array<InviteProps>
}