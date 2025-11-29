export default function () {
    const showTextLogo = useState<boolean>("navbar-show-text-logo", () => true)

    return {
        showTextLogo,
    }
}
