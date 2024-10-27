import { connectDB, envsValues } from "./config";
import server from "./server";

const main = async () => {
    try {

        const { PORT } = envsValues

        await connectDB()

        server.listen(PORT, () => {
            console.log(`Server running at port: ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
};

main();