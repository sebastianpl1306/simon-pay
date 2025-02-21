import { ContentCard } from '../content-cards';
import { OptionYourRed } from './OptionYourRed';

export const ContainerYourVehicles = () => {
  return (
    <ContentCard className="col-span-3 row-span-6">
        <p className="font-semibold text-2xl mb-4">Tu red Simon</p>
        <OptionYourRed/>
        <hr className="border border-dark-200 my-2"/>
        <OptionYourRed/>
        <hr className="border border-dark-200 my-2"/>
        <OptionYourRed/>
        <hr className="border border-dark-200 my-2"/>
    </ContentCard>
  )
}