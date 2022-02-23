import { Request, Response, NextFunction } from 'express';

const RapidApiRedirect = async (req: Request, res: Response, next: NextFunction) => {
    res.redirect('https://rapidapi.com/pgamerxdev/api/random-stuff-api/');
}

const DocsRedirect = async (req: Request, res: Response, next: NextFunction) => {
   res.redirect('https://api-docs.pgamerx.com')
}

const MainSiteRedirect = async (req: Request, res: Response, next: NextFunction) => {
   res.redirect("https://api-info.pgamerx.com")
}

const Deprecated = async(req:Request, res:Response) => {
    res.json(["Hey there, we have deprecated our old version and now we can only be operated through RapidApi. Kindly headover to https://api.pgamerx.com/new for more information"])
}

const RegisterSiteRedirect = async (req: Request, res: Response, next: NextFunction) => {
    res.redirect("https://api-info.pgamerx.com/manage-key")
 }

export default {
    RapidApiRedirect,
    DocsRedirect,
    MainSiteRedirect,
    Deprecated,
    RegisterSiteRedirect
}
