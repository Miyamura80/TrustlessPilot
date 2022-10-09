// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ REACT_APP_WEB3_CLIENT_ID: process.env.REACT_APP_WEB3_CLIENT_ID })
}
