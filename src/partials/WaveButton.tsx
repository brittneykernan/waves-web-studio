type IWaveButtonProps = {
  children: string;
  className?: string;
};

const WaveButton = (props: IWaveButtonProps) => (
  <a
    href="#"
    className={`waveButton relative shrink-0 self-start overflow-hidden rounded-full border-2 border-black px-4 py-2 text-lg ${props.className}`}
  >
    {props.children}
  </a>
);

export default WaveButton;
