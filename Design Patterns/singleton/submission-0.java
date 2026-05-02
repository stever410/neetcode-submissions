static class Singleton {
    private static Singleton instance;
    private String value;

    private Singleton() {
    }

    public static Singleton getInstance() {
        if(instance == null) {
            instance = new Singleton();
        } 
       return instance;
    }

    public String getValue() {
        return getInstance().value;
    }

    public void setValue(String value) {
        getInstance().value = value;
    }
    
}
