import { User } from "lucia"
import useCheckoutData from "./useCheckoutData"
import { useMemo, useState } from "react"
import { SEAT_VALUES, SeatValuesType } from "@/lib/utils"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

type Props = {
    user: User | null
}

const useTransaction = ({ user }: Props) => {
    const { data } = useCheckoutData()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const selectedSeat = useMemo(() => {
        return SEAT_VALUES[(data?.seat as SeatValuesType) ?? "ECONOMY"];
    }, [data?.seat]);
    const transactionMutate = useMutation({
        mutationFn: (data: any) => axios.post('/api/transactions/create', data).then((res) => res.data)
    })
    const totalPrice = (data?.flightDetail?.price ?? 0) + selectedSeat.additionalPrice
    const payTransaction = async () => {
        if (!data && !user) {
            return null
        }
        
        const bodyData = {
            bookingDate: new Date(),
            customerId: user?.id,
            flightId: data?.flightDetail?.id,
            price: totalPrice,
            seatId: data?.seatDetail?.id,
            departureCityCode: data?.flightDetail?.departureCityCode,
            destinationCityCode: data?.flightDetail?.destinationCityCode
        }

        try {
            setIsLoading(true)
            const transaction = await transactionMutate.mutateAsync(bodyData)
            //Handle Midtrans

            window.snap.pay(transaction.midtrans.token, {
                onSuccess: (result: any) => {
                    toast("Payment success!")
                    console.log(result);
                    router.push('/success-checkout')

                },
                onPending: (result: any) => {
                    toast("Waiting your payment!")
                    console.log(result);
                    router.push('/success-checkout')

                },
                onError: (error: any) => {
                    toast("Payment failed!")
                    console.log(error);

                },
                onClose: (result: any) => {
                    toast("You closed the popup without finishing the payment")
                    console.log(result);

                }
            })


            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error)

        }
    }

    return {
        payTransaction,
        isLoading
    }
}
export default useTransaction