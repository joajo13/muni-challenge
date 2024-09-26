import { Client } from "basic-ftp"

export const client = new Client()

try {
    await client.access({
        host: process.env.FTP_HOST,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
        secure: false
    })
    await client.ensureDir("muni-challenge")
    await client.cd("/muni-challenge")
} catch (error) {
    console.log(error)
}