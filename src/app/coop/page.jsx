import CoopItems from "@/components/CoopItems/CoopItems";
import Intro from "@/components/Intro/Intro";
import CoopService from "@/services/CoopService";
import FormService from "@/services/FormService";

export default async function Coop() {
    const sendDataCall = async (params) => {
        "use server";
        const data = await FormService.call(params);

        return data;
    };

    const coopData = await CoopService.cooperation();

    return (
        <>
            <Intro
                title={{
                    text: `Сотрудничество`,
                    style: { marginTop: 100, maxWidth: 400 },
                }}
                sendData={sendDataCall}
                paths={["Сотрудничество"]}
                server={true}
                buttonText="Подробнее"
                scrollTo="coop"
                isText={true}
                image="/images/spec.png"
                data={coopData}
            ></Intro>
            <CoopItems data={coopData} />
        </>
    );
}
