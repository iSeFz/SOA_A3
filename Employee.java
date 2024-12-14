import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class Employee {
    // Declare the attributes of the Employee class
    private Integer EmployeeID;
    private String FirstName;
    private String LastName;
    private String Designation;
    private Map<String, Integer> KnownLanguages;


    // Default constructor
    public Employee() {
        this.EmployeeID = 0;
        this.FirstName = "";
        this.LastName = "";
        this.Designation = "";
        this.KnownLanguages = new HashMap<>();
    }

    // Parameterized constructors
    public Employee(Integer ID, String FirstName, String LastName, String Designation, Map<String, Integer> KnownLanguages) {
        this.EmployeeID = ID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Designation = Designation;
        this.KnownLanguages = KnownLanguages;
    }

    public Employee(List<String> employeeData) {
        this.EmployeeID = Integer.parseInt(employeeData.get(0));
        this.FirstName = employeeData.get(1);
        this.LastName = employeeData.get(2);
        this.Designation = employeeData.get(3);
        this.KnownLanguages = new HashMap<>();
    }

    // Getters
    public Integer getID() {
        return EmployeeID;
    }

    public String getFirstName() {
        return FirstName;
    }

    public String getLastName() {
        return LastName;
    }

    public String getDesignation() {
        return Designation;
    }

    public Map<String, Integer> getKnownLanguages() {
        return KnownLanguages;
    }

    // Setters
    public void setID(Integer EmployeeID) {
        this.EmployeeID = EmployeeID;
    }

    public void setFirstName(String FirstName) {
        this.FirstName = FirstName;
    }

    public void setLastName(String LastName) {
        this.LastName = LastName;
    }

    public void setDesignation(String Designation) {
        this.Designation = Designation;
    }

    public void setKnownLanguages(Map<String, Integer> KnownLanguages) {
        this.KnownLanguages = KnownLanguages;
    }

    // Override the toString() method to return a string representation of the Employee object
    @Override
    public String toString() {
        return "<" + EmployeeID + ", " + FirstName + ", " + LastName + ", " + Designation + ", " + KnownLanguages + ">";
    }
}