import IMailProvider from '../models/IMailProvider';
import ISendMailDto from '../dtos/ISendMailDto';

export default class FakeMailProvider implements IMailProvider {
  private messages: ISendMailDto[] = [];

  public async sendMail(message: ISendMailDto): Promise<void> {
    this.messages.push(message);
  }
}
